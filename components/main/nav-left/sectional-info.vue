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
    },
    {
        title: "Java Utils",
        iconClass: "mdi:language-java",
        path: "/java-utils",
        focus: false,
        expanded: false,
        children: [
            {
                title: "Create Variable",
                path: "/java-utils/create-variable",
                focus: false,
            }
        ]
    }
]);

function handleNav(item: any) {
    navItems.forEach(parent => {
        parent.focus = false;
        parent.children?.forEach(child => child.focus = false);
    });

    if (item.path && item.path !== '#') {
        item.focus = true;
        router.push(item.path);
    }
}

function updateFocusByRoute() {
    navItems.forEach(parent => {
        parent.focus = (parent.path === route.path);
        parent.children?.forEach(child => {
            child.focus = (child.path === route.path);
            if (child.focus) {
                parent.focus = true;
                parent.expanded = true;
            } 
        });
    });
}

function toggleExpand(item: any) {
    item.expanded = !item.expanded;
}

onMounted(updateFocusByRoute);
watch(() => route.path, updateFocusByRoute);
</script>

<template>
    <nav>
        <ul class="isolate -mx-2.5 -mt-1.5">
            <li v-for="(item, index) in navItems" :key="index">
                <div class="flex items-center">
                    <button
                        type="button"
                        class="icon-group flex items-center gap-1.5 py-1 text-sm w-full text-left"
                        :class="item.focus
                            ? 'text-primary'
                            : 'text-muted hover:text-default transition-colors'"
                        @click="handleNav(item)"
                    >
                        <div class="flex items-center px-2.5 py-0.5 text-sm pr-0.5">
                            <Icon :icon="item.iconClass" class="size-5 shrink-0" />
                        </div>
                        <span class="title-truncate">
                            {{ item.title }}
                        </span>
                    </button>
                    <!-- Expand icon nếu có children -->
                    <button
                        v-if="item.children && item.children.length"
                        class="ml-1 p-1"
                        @click.stop="toggleExpand(item)"
                        aria-label="Expand"
                    >
                        <Icon :icon="item.expanded ? 'mdi:chevron-down' : 'mdi:chevron-right'" class="size-5" />
                    </button>
                </div>
                <!-- Menu cấp 2 -->
                <ul v-if="item.children && item.children.length && item.expanded" class="ml-8 mt-1">
                    <li v-for="(child, cIdx) in item.children" :key="cIdx">
                        <button
                            type="button"
                            class="flex items-center gap-1 py-1 text-sm w-full text-left"
                            :class="child.focus
                                ? 'text-primary font-semibold'
                                : 'text-muted hover:text-default transition-colors'"
                            @click="handleNav(child)"
                        >
                            <span class="title-truncate">
                                {{ child.title }}
                            </span>
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>