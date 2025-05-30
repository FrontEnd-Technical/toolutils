<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const navItems = reactive([
    {
        title: "Text Formater",
        iconClass: "mdi:text-box-check-outline",
        path: "/text-formatter",
        focus: true,
    },
    {
        title: "Json Formater",
        iconClass: "mdi:code-json",
        path: "/json-formatter",
        focus: false,
    },
    {
        title: "Base64 Formatter",
        iconClass: "mdi:file-code-outline",
        path: "/base64-formatter",
        focus: false,
    }
]);

function handleNav(item: any) {
    navItems.map(item => {
        item.focus = false;
    });

    if (item.path && item.path !== '#') {
        item.focus = true;
        router.push(item.path);
    }
}

function updateFocusByRoute() {
    navItems.forEach(item => {
        item.focus = (item.path === route.path);
    });
}

onMounted(updateFocusByRoute);
watch(() => route.path, updateFocusByRoute);
</script>

<template>
    <nav>
        <ul class="isolate -mx-2.5 -mt-1.5">
            <li v-for="(item, index) in navItems" :key="index">
                <button type="button" class="icon-group flex items-center gap-1.5 py-1 text-sm w-full text-left" :class="item.focus
                    ? 'text-primary'
                    : 'text-muted hover:text-default transition-colors'" @click="handleNav(item)">
                    <div class="flex items-center px-2.5 py-0.5 text-sm pr-0.5">
                        <Icon :icon="item.iconClass" class="size-5 shrink-0" />
                    </div>
                    <span class="title-truncate">
                        {{ item.title }}
                    </span>
                </button>
            </li>
        </ul>
    </nav>
</template>