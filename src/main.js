import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'material-symbols/index.css'
import './assets/scss/style.scss'

import {
  BContainer,
  BRow,
  BCol,
  BButton,
  BCard
} from 'bootstrap-vue-next'

const app = createApp(App)

app.component('BContainer', BContainer)
app.component('BRow', BRow)
app.component('BCol', BCol)
app.component('BButton', BButton)
app.component('BCard', BCard)

app.use(router)
app.mount('#app')