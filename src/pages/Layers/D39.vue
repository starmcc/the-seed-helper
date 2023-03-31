<template>
    <div style="max-width: 600px;">
        <el-row>
            <el-autocomplete style="min-width: 500px;" :debounce="100" class="inline-input" v-model="state"
                :fetch-suggestions="querySearch" placeholder="请输入NPC的问题" :trigger-on-focus="false" @select="handleSelect">
                <template slot-scope="{ item }">
                    <div class="name q">{{ item.q }}</div>
                </template>
            </el-autocomplete>
        </el-row>
        <el-row>
            <el-descriptions style="margin-top: 10px" :column="1" border v-if="successData.q !== undefined">
                <el-descriptions-item label="问题"> {{ successData.q }}</el-descriptions-item>
                <el-descriptions-item v-for="(item, index) in successData.a" :key="index" :label="index + 1">
                    <div v-for="(citem, id) in item.val" :key="id" :class="item.a === (id + 1) ? 'okClass' : ''"
                        v-text="citem">
                    </div>
                </el-descriptions-item>
            </el-descriptions>
        </el-row>
    </div>
</template>

<script>
import QaData from '@/commons/js/QaData'



export default {
    data: () => ({
        state: '',
        QaData,
        successData: {},
    }),
    methods: {
        querySearch(qs, cb) {
            // 调用 callback 返回建议列表的数据
            cb(qs ? this.QaData.filter(this.createFilter(qs)) : this.QaData)
        },
        createFilter(qs) {
            qs = this.$tify(qs)
            return (rt) => {
                // 搜问题
                if (rt.q.toLowerCase().indexOf(qs.toLowerCase()) !== -1) {
                    return true
                }
                let p1 = this.$pinyinFirstLetter(qs)
                let p2 = this.$pinyinFirstLetter(rt.q)
                if (p2.toLowerCase().indexOf(p1.toLowerCase()) !== -1) {
                    return true
                }
                return false
            }
        },
        handleSelect(item) {
            console.info(item)
            this.successData = item
        },

        searchByInitials(initials, data) {
            const query = initials.trim().toUpperCase()
            let py = pinyin.getCamelChars(data)
            return py.indexOf(query) != -1
        }

    }

}

</script>

<style scoped>
.okClass {
    background-color: #E1F3D8;
}

.q {
    font-size: 16px;
}
</style>