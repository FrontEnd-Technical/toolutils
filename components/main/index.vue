<script setup lang="ts">

</script>

<template>
    <main class="min-height relative">
        <div class="w-full max-width mx-auto">
            <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-10">
                <MainNavLeft class="lg:col-span-2" />
                <div class="lg:col-span-8">
                    <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-10">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
.min-height {
    min-height: calc(100vh - var(--ui-header-height));
}

.max-width {
    max-width: var(--ui-container);
}
</style>
