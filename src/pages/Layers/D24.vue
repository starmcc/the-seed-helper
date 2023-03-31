<template>
    <el-row>
        <el-row>
            <Aplayer preload ref="aplayer" @play="play" :music.sync="music" :list="MusicData"></Aplayer>
            <!-- <audio loop controls :src="music"></audio> -->
        </el-row>
        <el-row>
            <el-table :data="TipsData" border style="width: 100%">
                <el-table-column prop="map" label="地图名" width="180">
                </el-table-column>
                <el-table-column prop="tips" label="提示">
                </el-table-column>
            </el-table>
        </el-row>
    </el-row>
</template>

<script>
import Aplayer from 'vue-aplayer'
import MusicData from '@/commons/js/MusicData'
import TipsData from '@/commons/js/TipsData'
Aplayer.disableVersionBadge = true
// https://github.com/SevenOutman/vue-aplayer/blob/develop/docs/README.zh-CN.md
export default {
    components: {
        Aplayer
    },
    data: () => ({
        music: MusicData[0],
        MusicData, TipsData
    }),
    created() {

    },
    methods: {
        play() {
            this.copyData(this.music.title)
        },

        copyData(data) {
            const input = document.createElement('input')
            input.setAttribute('readonly', 'readonly')
            input.setAttribute('value', data)
            document.body.appendChild(input)
            input.setSelectionRange(0, 9999)
            input.select()
            document.execCommand('copy')
            document.body.removeChild(input)
            this.$message.closeAll()
            this.$message.success('复制[' + data + ']成功')
        }
    }

}

</script>
