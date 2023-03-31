<template>
    <div>
        <el-image style="max-width: 600px" :src="url" :preview-src-list="[url]"></el-image>
    </div>
</template>

<script>
export default {
    data: () => ({
        url: 'images/17.png'
    })


}

</script>