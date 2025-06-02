<script setup lang='ts'>
import { useRouter } from 'vue-router';
const router = useRouter();

const header_page = {
    title: "Java Utils",
    description: "Hỗ trợ các chức năng cho code Java"
}

const action_list = [
    {
        icon: 'mdi-gesture-tap-button',
        title: 'Create variable',
        path: '/java-utils/create-variable'
    }
]

function handleActionClick(action: any) {
    if (action.path) {
        router.push(action.path);
    }
}
</script>

<template>
    <div class="lg:col-span-12">
        <MainTitlePage :title="header_page.title" :description="header_page.description" />
        <div class="mt-8 pb-24">
            <v-list class="color-inherit">
                <v-list-item
                    v-for="action in action_list"
                    :key="action.title"
                    :subtitle="action.subtitle"
                    :title="action.title"
                    @click="handleActionClick(action)"
                    class="cursor-pointer"
                >
                    <template v-slot:prepend>
                        <v-avatar color="primary">
                            <v-icon color="white">{{ action.icon }}</v-icon>
                        </v-avatar>
                    </template>
                    <template v-slot:append>
                        <v-btn icon="mdi-information" variant="text"></v-btn>
                    </template>
                </v-list-item>
            </v-list>
        </div>
    </div>
</template>
<style scoped>
.color-inherit {
    background: inherit;
    color: white;
}
</style>