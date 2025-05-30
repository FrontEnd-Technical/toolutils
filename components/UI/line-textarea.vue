<template>
  <div
    class="lined-textarea-wrapper"
    :class="[
      `lined-textarea-wrapper--variant-${variant}`,
      { 'v-input--is-focused': isFocused, 'v-input--is-dirty': !!currentModelValue }
    ]"
    :style="wrapperStyle"
  >
    <div ref="lineNumbersContainer" class="line-numbers-column">
      <pre class="line-numbers-content" ref="lineNumbersContent">
        <span
          v-for="(lineNumber, index) in lineNumbersArray"
          :key="index"
          :class="{ 'line-number--error': lineNumber === errorLine }"
          >{{ lineNumber }}</span
        >
      </pre>
    </div>
    <v-textarea
      ref="vTextarea"
      :model-value="currentModelValue"
      @update:model-value="handleInput"
      :rows="effectiveFixedHeight !== undefined ? 1 : rows"
      :row-height="rowHeight"
      :no-resize="effectiveFixedHeight !== undefined ? true : noResize"
      :hide-details="hideDetails"
      :variant="variant"
      :height="effectiveFixedHeight"
      :auto-grow="effectiveFixedHeight !== undefined ? false : $attrs['auto-grow']"
      v-bind="filteredAttrs"
      @scroll="syncScroll"
      @focus="handleFocus"
      @blur="handleBlur"
      @mouseup="scheduleUpdateLineNumbersAndValidate"
      @keyup="scheduleUpdateLineNumbersAndValidate"
      class="lined-v-textarea"
    ></v-textarea>
  </div>
  <v-messages
    v-if="jsonError && !hideDetails"
    class="json-error-messages"
    :messages="[jsonError]"
    color="error"
  ></v-messages>
</template>

<script>
export default {
  name: 'LinedTextarea',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    rows: {
      type: [Number, String],
      default: 5,
    },
    rowHeight: {
      type: [Number, String],
      default: 24,
    },
    noResize: {
      type: Boolean,
      default: false,
    },
    hideDetails: {
      type: Boolean,
      default: true,
    },
    variant: {
      type: String,
      default: 'filled',
      validator: (val) => ['filled', 'outlined', 'underlined', 'plain', 'solo', 'solo-inverted', 'solo-filled'].includes(val),
    },
    fixedHeight: {
      type: [String, Number],
      default: null,
    },
    // Prop mới để bật/tắt validate JSON
    validateJson: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'focus', 'blur', 'json-error'],
  data() {
    return {
      currentModelValue: this.modelValue,
      lineNumbersText: '1',
      textareaElement: null,
      resizeObserver: null,
      isFocused: false,
      updateTimeout: null,
      jsonError: '', // Lưu trữ thông báo lỗi JSON
      errorLine: null, // Lưu trữ dòng bị lỗi
    };
  },
  computed: {
    effectiveFixedHeight() {
      if (this.fixedHeight === null || this.fixedHeight === undefined) return undefined;
      const parsed = parseInt(String(this.fixedHeight).replace('px', ''));
      return isNaN(parsed) ? undefined : parsed;
    },
    wrapperStyle() {
      if (this.effectiveFixedHeight !== undefined) {
        return {
          height: `${this.effectiveFixedHeight}px`,
          maxHeight: `${this.effectiveFixedHeight}px`,
        };
      }
      return {};
    },
    filteredAttrs() {
      const attrs = { ...this.$attrs };
      if (this.effectiveFixedHeight !== undefined) {
        delete attrs['auto-grow'];
        delete attrs['height'];
        delete attrs['no-resize'];
      }
      delete attrs['rows'];
      return attrs;
    },
    lineNumbersArray() {
      // Chuyển đổi chuỗi số dòng thành mảng để có thể lặp qua và highlight
      return this.lineNumbersText.split('\n').map(Number);
    }
  },
  watch: {
    modelValue(newValue) {
      if (newValue !== this.currentModelValue) {
        this.currentModelValue = newValue;
      }
    },
    currentModelValue() {
      this.$nextTick(() => {
        this.scheduleUpdateLineNumbersAndValidate();
      });
    },
    rows() {
      if (this.effectiveFixedHeight === undefined) {
        this.$nextTick(() => this.scheduleUpdateLineNumbersAndValidate());
      }
    },
    rowHeight() {
      this.$nextTick(() => {
        this.applyStylesForSync();
        this.scheduleUpdateLineNumbersAndValidate();
      });
    },
    variant() {
        this.$nextTick(() => {
            this.applyStylesForSync();
        });
    },
    fixedHeight() {
        this.$nextTick(() => {
            this.applyStylesForSync();
            this.scheduleUpdateLineNumbersAndValidate();
        });
    }
  },
  mounted() {
    if (this.$refs.vTextarea) {
      if (this.$refs.vTextarea.inputRef) {
        this.textareaElement = this.$refs.vTextarea.inputRef;
      } else if (this.$refs.vTextarea.textarea$) {
        this.textareaElement = this.$refs.vTextarea.textarea$;
      } else if (this.$refs.vTextarea.$el) {
        const vTextareaRoot = this.$refs.vTextarea.$el.matches('.v-textarea') ? this.$refs.vTextarea.$el : this.$refs.vTextarea.$el.querySelector('.v-textarea');
        if (vTextareaRoot) {
            this.textareaElement = vTextareaRoot.querySelector('textarea');
        } else {
             this.textareaElement = this.$refs.vTextarea.$el.querySelector('textarea');
        }
      }
    }

    if (!this.textareaElement) {
      console.warn("LinedTextarea (Vuetify 3): Không thể tìm thấy phần tử textarea nội bộ.");
    }

    this.$nextTick(() => {
      this.applyStylesForSync();
      this.updateLineNumbersAndValidate();
    });

    if (this.textareaElement && typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.scheduleUpdateLineNumbersAndValidate();
      });
      this.resizeObserver.observe(this.textareaElement);
    } else if (this.textareaElement) {
        this.textareaElement.addEventListener('input', this.scheduleUpdateLineNumbersAndValidate);
    }
  },
  beforeUnmount() {
    if (this.resizeObserver && this.textareaElement) {
      this.resizeObserver.unobserve(this.textareaElement);
    } else if (this.textareaElement) {
        this.textareaElement.removeEventListener('input', this.scheduleUpdateLineNumbersAndValidate);
    }
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
  },
  methods: {
    handleInput(newValue) {
      this.currentModelValue = newValue;
      this.$emit('update:modelValue', this.currentModelValue);
    },
    handleFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    handleBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    scheduleUpdateLineNumbersAndValidate() {
      if (this.updateTimeout) clearTimeout(this.updateTimeout);
      this.updateTimeout = setTimeout(() => {
        this.updateLineNumbersAndValidate();
      }, 30);
    },
    updateLineNumbersAndValidate() {
      if (!this.textareaElement || !this.$refs.lineNumbersContainer) return;

      const lines = this.currentModelValue.split('\n');
      const numberOfLines = lines.length || 1;
      let numbers = '';
      for (let i = 1; i <= numberOfLines; i++) {
        numbers += i + '\n';
      }
      this.lineNumbersText = numbers.trimEnd();
      this.syncScroll();
      
      if (this.validateJson) {
        this.validateJsonContent();
      } else {
        this.jsonError = '';
        this.errorLine = null;
      }
    },
    syncScroll() {
      if (this.textareaElement && this.$refs.lineNumbersContainer) {
        this.$refs.lineNumbersContainer.scrollTop = this.textareaElement.scrollTop;
      }
    },
    applyStylesForSync() {
      if (!this.textareaElement || !this.$refs.lineNumbersContainer || !this.$refs.lineNumbersContent) return;
      this.$nextTick(() => {
        const computedTextareaStyles = window.getComputedStyle(this.textareaElement);
        const lineNumbersColumn = this.$refs.lineNumbersContainer;
        const lineNumbersContentPre = this.$refs.lineNumbersContent;

        const paddingTop = computedTextareaStyles.paddingTop;
        const paddingBottom = computedTextareaStyles.paddingBottom;
        const lineHeight = (typeof this.rowHeight === 'number' && this.rowHeight > 0) ? `${this.rowHeight}px` : computedTextareaStyles.lineHeight;
        const fontSize = computedTextareaStyles.fontSize;
        const fontFamily = computedTextareaStyles.fontFamily;

        lineNumbersColumn.style.paddingTop = paddingTop;
        lineNumbersColumn.style.paddingBottom = paddingBottom;
        lineNumbersContentPre.style.fontFamily = fontFamily;
        lineNumbersContentPre.style.fontSize = fontSize;
        lineNumbersContentPre.style.lineHeight = lineHeight;
      });
    },
    validateJsonContent() {
      try {
        if (!this.currentModelValue.trim()) {
          this.jsonError = '';
          this.errorLine = null;
          this.$emit('json-error', null);
          return;
        }
        JSON.parse(this.currentModelValue);
        this.jsonError = '';
        this.errorLine = null;
        this.$emit('json-error', null); // Emit null if no error
      } catch (e) {
        this.jsonError = e.message;
        const match = e.message.match(/at position (\d+)/);
        if (match) {
          const position = parseInt(match[1]);
          this.errorLine = this.getLineNumberFromPosition(position);
        } else {
          // Fallback if position is not found in message (browser dependent)
          this.errorLine = null;
        }
        this.$emit('json-error', e); // Emit the error object
      }
    },
    getLineNumberFromPosition(position) {
      let currentPosition = 0;
      const lines = this.currentModelValue.split('\n');
      for (let i = 0; i < lines.length; i++) {
        currentPosition += lines[i].length + 1; // +1 for the newline character
        if (currentPosition > position) {
          return i + 1; // Line numbers are 1-based
        }
      }
      return null;
    }
  },
};
</script>

<style scoped>
.lined-textarea-wrapper {
  display: flex;
  border-radius: var(--v-border-radius-root, 4px);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  position: relative;
  overflow: hidden;
  border: 1px solid rgb(29, 29, 29);
}

.line-numbers-column {
  background-color: rgba(var(--v-theme-on-surface), 0.06);
  padding-left: 12px;
  padding-right: 8px;
  text-align: right;
  user-select: none;
  box-sizing: border-box;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  color: #919191;
  height: 100%;
  overflow-y: hidden;
}

.line-numbers-content {
  display: flex; /* Dùng flexbox để mỗi số dòng là một item */
  flex-direction: column; /* Xếp các số dòng theo chiều dọc */
  margin: 0;
  padding: 0;
  white-space: pre;
  font: inherit;
}

.line-numbers-content span {
  display: block; /* Đảm bảo mỗi số dòng chiếm một dòng riêng */
}

.line-number--error {
  background-color: rgba(255, 0, 0, 0.3); /* Màu nền đỏ mờ cho dòng lỗi */
  color: yellow; /* Màu chữ nổi bật hơn */
  font-weight: bold;
}

.lined-v-textarea {
  flex-grow: 1;
  width: 0;
  height: 100%;
}

/* ----- Deep selectors cho Vuetify 3 v-textarea internals ----- */
.lined-v-textarea :deep(.v-field) {
  background-color: transparent !important;
  box-shadow: none !important;
  height: 100% !important;
}

/* Loại bỏ border của .v-field nếu không phải là 'outlined' và wrapper đã có border */
.lined-v-textarea:not(.v-textarea--variant-outlined) :deep(.v-field__outline) {
  display: none !important;
}
.lined-v-textarea:not(.v-textarea--variant-outlined) :deep(.v-field) {
  --v-field-border-width: 0px !important;
  --v-field-border-opacity: 0 !important;
}

.lined-v-textarea.v-textarea--variant-outlined :deep(.v-field) {
  background-color: rgb(var(--v-theme-surface)) !important;
}

/* Đảm bảo khu vực nhập liệu bên trong v-field cũng chiếm 100% chiều cao và cho phép cuộn */
.lined-v-textarea :deep(.v-field__field) {
    height: 100%;
}
.lined-v-textarea :deep(.v-field__input) {
  padding-inline-start: 12px !important;
  padding-inline-end: var(--v-field-padding-end, 16px) !important;
  height: 100% !important;
  max-height: 100%;
  overflow-y: auto !important;
}

.lined-v-textarea :deep(textarea) {
  background-color: transparent !important;
  box-shadow: none !important;
  height: 100% !important;
}

.lined-v-textarea:deep(.v-input__details) {
  display: none !important;
}

/* Style for JSON error messages */
.json-error-messages {
  margin-top: 8px; /* Khoảng cách giữa textarea và tin nhắn lỗi */
  padding-left: 12px; /* Căn chỉnh với padding của textarea */
  text-align: left;
}
</style>