import Vue from 'vue'
import Main from './Main.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/commons/css/public.css'
import router from '@/router'
import Hls from 'hls.js'
import Pinyin from 'tiny-pinyin'
import { tify } from 'chinese-conv'

Vue.prototype.$pinyinFirstLetter = (str) => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i)
    const pinyin = Pinyin.convertToPinyin(char, '', true)
    result += pinyin.charAt(0)
  }
  return result.toUpperCase()
}

Vue.prototype.$tify = tify

Vue.prototype.$Hls = Hls

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(Main),
  router,
}).$mount('#app')
