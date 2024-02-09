import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DatePlugin from '@/plugins/date'

const app = createApp(App)

app.use(router)
app.use(DatePlugin)
app.mount('#app')
