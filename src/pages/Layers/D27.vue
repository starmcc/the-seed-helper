<template>
    <div>
        <el-image class="show-image" fit="scale-down" lazy :src="url[0]" :preview-src-list="[url[0]]"></el-image>
    </div>
</template>

<script>
export default {
    data: () => ({
        url: ['images/27.jpg']
    })

}

</script>