import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


function buildDData(numbers) {
    let routes = [{
        path: '/',
        component: () => import('@/pages/Index')
    }]
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i]
        routes.push({
            path: '/' + num,
            component: () => import('@/pages/Layers/D' + num)
        })
    }
    return routes
}


export default new Router({
    routes: buildDData([17, 22, 23, 24, 27, 39])
})