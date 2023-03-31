import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


function buildDData(data) {
    let routes = [{
        path: '/',
        component: () => import('@/pages/Index')
    }]
    for (let i = 0; i < data.length; i++) {
        const num = data[i].num
        const title = data[i].num + '层:' + data[i].title
        routes.push({
            meta: { title },
            path: '/' + num,
            component: () => import('@/pages/Layers/D' + num)
        })
    }
    return routes
}


export default new Router({
    mode: 'history',
    routes: buildDData([
        { title: '带视野限制的沼泽', num: 17 },
        { title: '云朵', num: 22 },
        { title: '隐藏台阶', num: 23 },
        { title: '听音识曲', num: 24 },
        { title: '选岔路', num: 27 },
        { title: '老者问答', num: 39 },
        { title: '忍耐考验', num: 42 },
        { title: '终极忍耐', num: 48 },
    ])
})