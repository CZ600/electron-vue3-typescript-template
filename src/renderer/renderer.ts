import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入 Element Plus 组件库和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入中文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn' // 根据需要选择语言
const app = createApp(App)
app.use(router)
// 使用 Element Plus
app.use(ElementPlus, {
  locale: zhCn
})

app.mount('#app')
