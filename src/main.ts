import { createApp } from 'vue'
import App from '@/views/App.vue'
import store from '@/store'
import '@/mock/index'

debugger
createApp(App).use(store).mount('#app')
