<template>
    <div>
        <p>进入次关后总共有3小节</p>
        <p>第一节：正常跳跳乐</p>
        <p>第二节：关灯跳跳乐</p>
        <p>第三节：关灯并颠倒方向跳跳乐</p>
        <el-image class="show-image" fit="scale-down" v-for="(url, index) in urls" :key="index" lazy :src="url"
        :preview-src-list="urls"></el-image>
    </div>
</template>

<script>
export default {
    data: () => ({
        urls: ['images/43.png']
    })

}

</script>