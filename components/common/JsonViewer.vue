<template>
    <div
        style="position: relative; padding: 6px; height: inherit; max-height: inherit; width: 100%; overflow: inherit;">
        <template v-if="jsonText !== ''">
            <vue-json-pretty :data="jsonData" show-line="true" show-line-number="true" class="my-json-pretty"/>
            <v-icon class="position-absolute" color="success" style="top: 10px; right: 10px; cursor: pointer;"
                :title="isCopied ? 'Đã copy!' : 'Copy JSON'" @click="handleCopy">
                {{ isCopied ? 'mdi-check-circle-outline' : 'mdi-content-copy' }}
            </v-icon>
        </template>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

const props = defineProps({
    jsonText: {
        type: String,
        required: true,
    },
})

const jsonData = ref({})
const isCopied = ref(false)

watch(
    () => props.jsonText,
    (newVal) => {
        try {
            if(newVal !== ''){
                jsonData.value = JSON.parse(newVal)
            }
        } catch (e) {
            jsonData.value = { error: 'Invalid JSON' }
        }
    },
    { immediate: true }
)

const handleCopy = async () => {
    try {
        const formatted = JSON.stringify(jsonData.value, null, 2)
        await navigator.clipboard.writeText(formatted)
        isCopied.value = true
        setTimeout(() => (isCopied.value = false), 1000)
    } catch (err) {
        alert('Copy thất bại!')
    }
}
</script>
