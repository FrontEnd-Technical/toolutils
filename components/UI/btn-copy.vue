<template>
    <v-btn flat @click="copyText">
        <v-icon>{{ copied ? 'mdi-check-circle-outline' : 'mdi-content-copy' }}</v-icon>
        <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
    </v-btn>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
})

const copied = ref(false)
let timeoutId = null

const copyText = async () => {
    try {
        await navigator.clipboard.writeText(props.text)
        copied.value = true
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            copied.value = false
        }, 1000)
    } catch (e) {
        alert('Không thể sao chép vào clipboard!')
    }
}
</script>
