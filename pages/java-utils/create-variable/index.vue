<script setup lang='ts'>
const header_page = {
    title: "Create Variable",
    description: "Tạo các biến trong Java từ tên trương và kiểu dữ liệu"
}

const typeMap: Record<string, string> = {
        '配列': 'List<T>',
        '日付': 'LocalDate',
        '整数': 'Integer',
        '文字列': 'String'
    };

const fields = reactive({
    name: '',
    type: '',
    comment: '',
    result: ''
});

const _toCamelCase = (str: string) => {
    return str.replace(/_([a-zA-Z0-9])/g, (_, c) => c ? c.toUpperCase() : '');
}

const convertVariables = () => {
    const names = fields.name.split('\n').map(item => item.trim()).filter(item => item);
    const types = fields.type.split('\n').map(item => item.trim()).filter(item => item);
    const comments = fields.comment.split('\n').map(item => item.trim()).filter(item => item);

    const typesConverted = types.map(type => typeMap[type] || type);

    const results = names.map((name, index) => {
        const camelName = _toCamelCase(name);
        return `/**
        * ${comments[index]}
        **/
        private ${typesConverted[index]} ${camelName};\n`;
    });

    fields.result = results.map(item => item.trim()).join('\n');
};
</script>

<template>
    <div class="lg:col-span-12">
        <MainTitlePage :title="header_page.title" :description="header_page.description" />
        <div class="mt-8 pb-24">
            <v-row dense>
                <v-col cols="12" md="4">
                    <span class="text-pretty font-bold text-lg">Tên trường</span>
                    <v-textarea v-model="fields.name" rows="10" outlined auto-grow></v-textarea>
                </v-col>
                <v-col cols="12" md="4">
                    <span class="text-pretty font-bold text-lg">Kiểu dữ liệu</span>
                    <v-textarea v-model="fields.type" rows="10" outlined auto-grow></v-textarea>
                </v-col>
                <v-col cols="12" md="4">
                    <span class="text-pretty font-bold text-lg">Comment</span>
                    <v-textarea v-model="fields.comment" rows="10" outlined auto-grow></v-textarea>
                </v-col>
            </v-row>
            <v-row dense>
                <v-col cols="12">
                    <v-btn flat class="w-full sm:w-auto" @click="convertVariables">
                        <span class="text-ellipsis normal-case">Convert</span>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row dense>
                <v-col cols="12">
                    <span class="text-pretty font-bold text-lg">Kết quả</span>
                    <!-- <v-textarea v-model="fields.result" rows="10" outlined auto-grow readonly></v-textarea> -->
                    <CommonCopyableTextarea label="{...}" auto-grow v-model="fields.result" />
                </v-col>
            </v-row>
        </div>
    </div>

</template>
<style scoped></style>