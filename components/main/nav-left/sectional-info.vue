<script setup lang="ts">
import { Icon } from "@iconify/vue";

const navItems = reactive([
  {
    title: "Introduction",
    iconClass: "mdi:information-slab-circle-outline",
    path: "#",
    focus: true,
  },
  {
    title: "Installation",
    iconClass: "mdi:play-outline",
    path: "#",
    focus: false,
  },
  {
    title: "Configuration",
    iconClass: "mdi:cog-transfer-outline",
    path: "#",
    focus: false,
  },
  {
    title: "Views",
    iconClass: "mdi:code-block-braces",
    path: "#",
    focus: false,
  },
  {
    title: "Assets",
    iconClass: "mdi:image-outline",
    path: "#",
    focus: false,
  },
    {
    title: "Styling",
    iconClass: "mdi:package-variant-closed",
    path: "#",
    focus: false,
  },
]);
</script>

<template>
  <nav>
    <ul class="isolate -mx-2.5 -mt-1.5">
      <li v-for="(item, index) in navItems" :key="index">
        <a
          :href="item.path"
          class="icon-group flex items-center gap-1.5 py-1 text-sm"
          :class="
            item.focus
              ? 'text-primary'
              : 'text-muted hover:text-default transition-colors'
          "
        >
          <div class="flex items-center px-2.5 py-0.5 text-sm pr-0.5"
          >
            <Icon :icon="item.iconClass" class="size-5 shrink-0" />
          </div>
          <span class="title-truncate">
            {{ item.title }}
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style scoped></style>
