<script setup lang='ts'>
const inputJson = ref<string>('');
const outputJson = ref<string>('');

const isValid = ref(false)
const jsonError = ref('')
const errorLine = ref<number | null>(null)

const clearData = () => {
    inputJson.value = '';
    outputJson.value = '';
    isValid.value = false;
    jsonError.value = '';
    errorLine.value = null;
}

const formatAndBeautifyJSON = (space: number = 2): any => {
    if (0 == inputJson.value.trim().length)
        return false;

    validateAndRender();

    try {
        outputJson.value = inputJson.value;
    } catch (error) {
        console.error('Invalid JSON:', error);
    }
}

const validateAndRender = () => {
    const result = validateJsonAndGetErrorLine(inputJson.value);
    isValid.value = result.valid;
    jsonError.value = result.error || '';
    errorLine.value = result.line || null;
}

</script>

<template>
    <div class="lg:col-span-12">
        <div class="relative border-b border-default py-4">
            <div class="">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <h1 class="text-3xl sm:text-4xl text-pretty font-bold text-highlighted">Json Fomatter</h1>
                </div>
                <div class="text-lg text-pretty text-muted mt-4">Hỗ trợ các thao tác với chuỗi JSON</div>
            </div>
        </div>
        <v-divider></v-divider>
        <div class="mt-8 pb-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div class="section">
                    <h1 class="text-xl font-bold text-pretty pb-2">Input Json</h1>
                    <UILineTextarea v-model="inputJson" :rows="21" rowHeight="21"
                        placeholder='{"example": "Paste your JSON here", "array": [1, 2, 3]}' :validate-json="true"
                        fixedHeight="536px" variant="outlined" />
                    <div class="flex flex-col sm:flex-row gap-2 mt-4">
                        <v-btn flat @click="formatAndBeautifyJSON(4)">
                            <span class="text-ellipsis normal-case">Format/Beautify</span>
                        </v-btn>
                        <v-btn flat @click="clearData">
                            <span class="text-ellipsis normal-case">Clear</span>
                        </v-btn>
                    </div>
                </div>
                <div class="section">
                    <h1 class="text-xl font-bold text-pretty pb-2">Output Json</h1>
                    <div class="container-json">
                        <div v-if="jsonError" class="error-text pa-3">
                            ❌ JSON lỗi tại dòng {{ errorLine }}: {{ jsonError }}
                        </div>
                        <div v-else>
                            <CommonJsonViewer :jsonText="outputJson" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-json {
    width: 100%;
    height: 536px;
    max-height: 536px;
    overflow-y: auto;
    background-color: var(--ui-bg) !important;
    border: 1px solid var(--ui-border);
    border-radius: 5px;
}
</style>