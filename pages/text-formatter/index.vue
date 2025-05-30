<script setup lang='ts'>
const textRoot = ref<string>('');
const textResult = ref<string>('');

const clearData = () => {
    textRoot.value = '';
    textResult.value = '';
}

const trimText = () => {
    const text = trimMultiline(textRoot.value);
    textResult.value = text;
}

const removeLineEmpty = () => {
    const text = trimMultiline(textRoot.value, true);
    textResult.value = text;
}

const handleUperCaseText = () => {
    const text = trimMultiline(textRoot.value);
    textResult.value = text.toUpperCase();
};

const handleLowCaseText = () => {
    const text = trimMultiline(textRoot.value);
    textResult.value = text.toLowerCase();
};

const _toSentenceCase = (text: string) => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const handleSentenceCase = () => {
    const text = trimMultiline(textRoot.value);
    textResult.value = text
        .split(/([.?!]\s*)/)
        .map((part, i) => (i % 2 === 0 ? _toSentenceCase(part.trim()) : part))
        .join('');
}

const handleCapitalizedCase = () => {
    const text = trimMultiline(textRoot.value);
    textResult.value = text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

const insertTab = (event: KeyboardEvent, modelName: string) => {
    const target = event.target as HTMLTextAreaElement;
    const value = target.value;
    const start = target.selectionStart;
    const end = target.selectionEnd;
    const newValue = value.substring(0, start) + '\t' + value.substring(end);
    if (modelName === 'textRoot') {
        textRoot.value = newValue;
    } else if (modelName === 'textResult') {
        textResult.value = newValue;
    }
    nextTick(() => {
        target.selectionStart = target.selectionEnd = start + 1;
    });
};

</script>

<template>
    <div class="lg:col-span-12">
        <div class="relative border-b border-default py-4">
            <div class="">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <h1 class="text-3xl sm:text-4xl text-pretty font-bold text-highlighted">Text Fomatter</h1>
                </div>
                <div class="text-lg text-pretty text-muted mt-4">Hỗ trợ các thao tác với text</div>
            </div>
        </div>
        <v-divider></v-divider>
        <div class="mt-8 pb-24 space-y-12">
            <div id="#automation-and-conventions" class="section">
                <v-textarea label="Vui lòng nhập text..." variant="outlined" rows="10" v-model="textRoot"
                    @keydown.tab.prevent="insertTab($event, 'textRoot')"></v-textarea>
                <div class="flex flex-col sm:flex-row gap-2 mt-4">
                    <v-btn flat @click="handleUperCaseText">
                        <span class="text-ellipsis normal-case">UPER CASE</span>
                    </v-btn>
                    <v-btn flat @click="handleLowCaseText">
                        <span class="text-ellipsis normal-case">lower case</span>
                    </v-btn>
                    <v-btn flat @click="handleSentenceCase">
                        <span class="text-ellipsis normal-case">Sentence case</span>
                    </v-btn>
                    <v-btn flat @click="handleCapitalizedCase">
                        <span class="text-ellipsis normal-case">Capitalized Case</span>
                    </v-btn>
                    <v-btn flat @click="trimText">
                        <span class="text-ellipsis normal-case">Trim</span>
                    </v-btn>
                    <v-btn flat @click="removeLineEmpty">
                        <span class="text-ellipsis normal-case">Remove Line Empty</span>
                    </v-btn>
                    <v-btn flat @click="clearData">
                        <span class="text-ellipsis normal-case">Clear</span>
                    </v-btn>
                </div>
            </div>
            <div id="#automation-and-conventions" class="section">
                <h1 class="text-xl font-bold text-pretty pb-2">Text kết quả</h1>
                <CommonCopyableTextarea v-model="textResult" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.v-textarea input:focus-visible,
.v-textarea textarea:focus-visible {
    outline: none !important;
    box-shadow: none !important;
}
</style>