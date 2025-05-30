<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    modelValue: string;
    rows?: string;
    label?: string;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const isCopied = ref(false);
let copyTimeout: ReturnType<typeof setTimeout> | null = null;

const handleCopyText = async () => {
    if (props.modelValue) {
        try {
            await navigator.clipboard.writeText(props.modelValue);
            isCopied.value = true;
            if (copyTimeout) clearTimeout(copyTimeout);
            copyTimeout = setTimeout(() => {
                isCopied.value = false;
            }, 1000);
        } catch (e) {
            alert('Không thể copy vào clipboard!');
        }
    }
};
</script>

<template>
    <v-textarea variant="outlined" :model-value="modelValue" :rows="rows ?? '10'" :label="label" readonly>
        <template #append-inner>
            <v-icon class="cursor-pointer" tabindex="-1" @mousedown.prevent.stop="handleCopyText" title="Copy">
                {{ isCopied ? 'mdi-check-circle-outline' : 'mdi-content-copy' }}
            </v-icon>
        </template>
    </v-textarea>
</template>