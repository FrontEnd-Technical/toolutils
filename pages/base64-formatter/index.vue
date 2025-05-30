<script setup lang='ts'>
import Encoding from 'encoding-japanese';

const charsets = [
  'UTF8',
  'SJIS',
  'EUCJP',
  'JIS',
  'UNICODE',
  'AUTO'
]

const textRoot = ref<any>('');
const textResult = ref<any>('');
const selectedCharset = ref<any>('UTF8')

const clearData = () => {
    textRoot.value = '';
    textResult.value = '';
    selectedCharset.value = 'UTF8';
}

const decodeBase64 = () => {
    try {
    const binaryStr = atob(textRoot.value)
    const byteArray = [...binaryStr].map(char => char.charCodeAt(0))
    const decoded = Encoding.convert(byteArray, {
      from: selectedCharset.value,
      to: 'UNICODE',
      type: 'string',
    })
    textResult.value = decoded
  } catch (e) {
    textResult.value = `❌ Decode lỗi: ${e instanceof Error ? e.message : 'Không xác định'}`
  }
}

const encodeBase64 = () => {
try {
    const byteArray = Encoding.convert(textRoot.value, {
      from: 'UNICODE',
      to: selectedCharset.value,
      type: 'array',
    })
    const binaryStr = String.fromCharCode(...byteArray)
    textResult.value = btoa(binaryStr)
  } catch (e) {
    textResult.value = `❌ Encode lỗi: ${e instanceof Error ? e.message : 'Không xác định'}`
  }
}

const encodeUrl = (text: string, charset: string) => {
  const uint8Array = Encoding.convert(text, {
    to: charset,
    from: 'UNICODE',
    type: 'array',
  })
  return encodeURIComponent(String.fromCharCode(...uint8Array))
}

const decodeUrl = (encoded: string, charset: string) => {
  const decoded = decodeURIComponent(encoded)
  const byteArray = new Uint8Array([...decoded].map(c => c.charCodeAt(0)))
  const unicodeString = Encoding.convert(byteArray, {
    to: 'UNICODE',
    from: charset,
    type: 'string',
  })
  return unicodeString
}

const handleEncodeUrl = () => {
  try {
    textResult.value = encodeUrl(textRoot.value, selectedCharset.value)
  } catch (e) {
    textResult.value = 'Encoding failed'
  }
}

const handleDecodeUrl = () => {
  try {
    textResult.value = decodeUrl(textRoot.value, selectedCharset.value)
  } catch (e) {
    textResult.value = 'Decoding failed'
  }
}
</script>

<template>
    <div class="lg:col-span-12">
        <div class="relative border-b border-default py-4">
            <div class="">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <h1 class="text-3xl sm:text-4xl text-pretty font-bold text-highlighted">Base64 Fomatter</h1>
                </div>
                <div class="text-lg text-pretty text-muted mt-4">Hỗ trợ các thao tác với Base64</div>
            </div>
        </div>
        <v-divider></v-divider>
        <div class="mt-8 pb-24 space-y-12">
            <div class="section">
                <v-textarea label="Vui lòng nhập Base64..." variant="outlined" rows="10" v-model="textRoot"></v-textarea>
                <div class="flex flex-col sm:flex-row gap-2 mt-1">
                    <div class="flex flex-col sm:flex-row flex-1 gap-2">
                        <v-btn flat class="w-full sm:w-auto" @click="decodeBase64">
                            <span class="text-ellipsis normal-case">Base64 Decode</span>
                        </v-btn>
                        <v-btn flat class="w-full sm:w-auto" @click="encodeBase64">
                            <span class="text-ellipsis normal-case">Base64 Encode</span>
                        </v-btn>
                        <v-btn flat class="w-full sm:w-auto" @click="handleDecodeUrl">
                            <span class="text-ellipsis normal-case">Decode URL</span>
                        </v-btn>
                        <v-btn flat class="w-full sm:w-auto" @click="handleEncodeUrl">
                            <span class="text-ellipsis normal-case">Encode URL</span>
                        </v-btn>
                        <v-btn flat class="w-full sm:w-auto" @click="clearData">
                            <span class="text-ellipsis normal-case">Clear</span>
                        </v-btn>
                    </div>
                    <div class="sm:w-52 w-full">
                        <v-select
                            v-model="selectedCharset"
                            :items="charsets"
                            label="Chọn Charset"
                            variant="outlined"
                        />
                    </div>
                </div>
            </div>
            <div class="section mt-0">
                <h1 class="text-xl font-bold text-pretty pb-2">Text kết quả</h1>
                <CommonCopyableTextarea label="{...}" v-model="textResult" />
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>