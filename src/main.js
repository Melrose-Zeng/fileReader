import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import '@/style/global.css'
import 'element-plus/dist/index.css'
import 'swiper/css'
import 'animate.css';
// 2. 导入 VueAwesomeSwiper 插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)


 
// 4. 创建 App 并全局注册
app.use(VueAwesomeSwiper) // 全局注



app.mount('#app')
