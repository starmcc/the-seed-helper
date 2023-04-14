<template>
    <div>
        <el-image class="show-image" fit="scale-down" v-for="(url, index) in urls" :key="index" lazy :src="url"
            :preview-src-list="urls"></el-image>
    </div>
</template>

<script>
export default {
    data: () => ({
        urls: ['images/12.png', 'images/12.1.png', 'images/12.2.png', 'images/12.3.png', 'images/12.4.png']
    })


}

</script>