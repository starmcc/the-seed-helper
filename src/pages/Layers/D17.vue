<template>
    <div>
        <el-image class="show-image" fit="scale-down" lazy :src="url" :preview-src-list="url"></el-image>
    </div>
</template>

<script>
export default {
    data: () => ({
        url: 'images/17.png'
    })


}

</script>