import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require('@/assets/scss/index.scss')

createApp(App).use(router).mount('#app')
