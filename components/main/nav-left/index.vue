<script lang="ts">
import { MainNavLeftDashedLine, MainNavLeftSectionalInfo } from "#components";
</script>

<template>
  <aside class="hidden overflow-y-auto py-8 screen-media-large">
    <div class="relative">
      <MainNavLeftGeneralInfo />
      <MainNavLeftDashedLine />
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
</style>
