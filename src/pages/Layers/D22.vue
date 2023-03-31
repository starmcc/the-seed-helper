<template>
    <div>
        <el-image style="max-width: 600px" :src="url[0]" :preview-src-list="[url[0]]"></el-image>
        <el-image style="max-width: 600px" :src="url[1]" :preview-src-list="[url[1]]"></el-image>
    </div>
</template>

<script>
export default {
    data: () => ({
        url: ['images/22.png', 'images/22.1.png']
    })


}

</script>