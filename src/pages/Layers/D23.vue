<template>
    <div>
        <el-image style="max-width: 600px" :src="url[0]" :preview-src-list="[url[0]]"></el-image>
    </div>
</template>

<script>
export default {
    data: () => ({
        url: ['images/23.jpg']
    })


}

</script>