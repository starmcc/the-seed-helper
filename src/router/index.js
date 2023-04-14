import Vue from 'vue'
import Router from 'vue-router'
import LayersData from '@/commons/js/LayersData'
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
    routes: buildDData(LayersData)
})