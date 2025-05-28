<script lang="ts"></script>

<template>
  <header
    class="backdrop-blur h-[var(--ui-header-height)] ct-border-b fixed-header-scroll"
  >
    <div
      class="w-full max-w-[var(--ui-container)] h-full mx-auto ct-flex-col gap-3"
    >
      <div class="flex items-center gap-1.5">
        <a href="/" class="flex gap-2 items-end">
          <HeaderLogo />
        </a>
      </div>
    </div>
  </header>
</template>
<style scoped>
.ct-border-b {
  border: 1px solid var(--ui-border);
}

.fixed-header-scroll {
  position: sticky;
  top: 0;
  z-index: 50;
}

.ct-flex-col {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.backdrop-blur {
  background-color: color-mix(in oklab, var(--ui-bg) 75%, transparent);
  --tw-backdrop-blur: blur(8px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
    var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
    var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
    var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
    var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
    var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
    var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
    var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
    var(--tw-backdrop-sepia);
}
</style>
