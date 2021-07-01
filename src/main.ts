import { createApp } from 'vue'
import App from '@/views/App.vue'
import store from '@/store'
import '@/mock/index.js'

createApp(App).use(store).mount('#app')
