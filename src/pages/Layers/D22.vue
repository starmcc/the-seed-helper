<template>
    <div>
        <el-image class="show-image" fit="scale-down" lazy :src="url[0]" :preview-src-list="url"></el-image>
        <el-image class="show-image" fit="scale-down" lazy :src="url[1]" :preview-src-list="url"></el-image>
    </div>
</template>

<script>
export default {
    data: () => ({
        url: ['images/22.png', 'images/22.1.png']
    })


}

</script>