<template>
    <el-row style="width: 700px">
        <el-row style="margin-bottom: 10px;">
            <el-button :type="type1" @click="changeStatus(0)">查看提示</el-button>
            <el-button :type="type2" @click="changeStatus(1)">听歌</el-button>
        </el-row>
        <el-row v-show="status === 0">
            <el-table :data="TipsData" size="mini" border>
                <el-table-column prop="map" label="地图名" width="180">
                    <template slot-scope="scope">
                        <div style="text-align:center;">
                            <el-link v-text="scope.row.map" @click="copyData(scope.row.map)"></el-link>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="tips" label="提示">
                    <template slot-scope="scope">
                        <el-link v-text="scope.row.tips" @click="copyData(scope.row.map)"></el-link>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-row v-show="status === 1">
            <Aplayer preload ref="aplayer" @play="copyData(music.title)" :music.sync="music" :list="MusicData">
            </Aplayer>
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
        MusicData, TipsData,
        status: 0,
        type1: 'primary',
        type2: '',
    }),
    created() {
    },
    methods: {
        changeStatus(arg) {
            if (arg === 0) {
                this.type1 = 'primary'
                this.type2 = ''
            } else {
                this.type1 = ''
                this.type2 = 'primary'
            }
            this.status = arg
            this.$refs.aplayer.pause()
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
