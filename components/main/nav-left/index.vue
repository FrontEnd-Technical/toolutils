<script setup lang="ts">
</script>

<template>
  <aside class="hidden overflow-y-auto py-4 screen-media-large">
    <div class="relative">
      <MainNavLeftSectionalInfo />
    </div>
  </aside>
</template>
<style scoped>
@media (min-width: 1280px) {
  /* Apply: Screen  ≥ 1280px */
  .screen-media-large {
    display: block;
    max-height: calc(100vh - var(--ui-header-height));
    position: sticky;
    top: var(--ui-header-height);
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 1279px) {
  /* Apply: Screen  < 1279px */
  .screen-media-large {
    display: block;
    max-height: calc(100vh - var(--ui-header-height));
    position: sticky;
    top: var(--ui-header-height);
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
