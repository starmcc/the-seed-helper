<template>
    <div>
        <el-image class="show-image" fit="scale-down" v-for="(url, index) in urls" :key="index" lazy :src="url"
        :preview-src-list="urls"></el-image>
    </div>
</template>

<script>
export default {
    data: () => ({
        urls: ['images/44.png', 'images/44.1.png']
    })

}

</script>