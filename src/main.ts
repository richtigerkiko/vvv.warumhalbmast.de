import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

require('bootstrap/scss/bootstrap.scss')
require('@/assets/scss/index.scss')

createApp(App).use(router).mount('#app')
