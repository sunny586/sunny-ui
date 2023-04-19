import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MyTest from '../../packages/main'

console.log(MyTest, 'haha...')

createApp(App).use(router).use(MyTest).mount('#app')
