<script setup lang="ts">
import { Icon } from "@iconify/vue";

const navItems = reactive([
  {
    title: "Get Started",
    iconClass: "mdi:rocket-launch",
    path: "#",
    focus: true,
  },
  {
    title: "Guide",
    iconClass: "mdi:book-open-blank-variant-outline",
    path: "#",
    focus: false,
  },
    {
    title: "API",
    iconClass: "mdi:code-tags",
    path: "#",
    focus: false,
  },
    {
    title: "Example",
    iconClass: "mdi:code-block-braces",
    path: "#",
    focus: false,
  },
      {
    title: "Community",
    iconClass: "mdi:comment-multiple-outline",
    path: "#",
    focus: false,
  },
]);
</script>

<template>
  <nav>
    <ul>
      <li class="relative" v-for="(item, index) in navItems" :key="index">
        <a
          :href="item.path"
          class="icon-group flex items-center gap-1.5 py-1 text-sm"
          :class="
            item.focus
              ? 'text-primary'
              : 'text-muted hover:text-default transition-colors'
          "
        >
          <div
            class="rounded-md p-1 inline-flex ring-inset ring"
            :class="
              item.focus
                ? 'text-inverted bg-primary ring-primary'
                : 'group-hover:bg-primary group-hover:ring-primary group-hover:text-inverted ring-accented text-dimmed transition'
            "
          >
            <Icon :icon="item.iconClass" class="size-4 shrink-0" />
          </div>
          <span class="title-truncate">
            {{ item.title }}
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.title-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
