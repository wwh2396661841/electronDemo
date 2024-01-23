import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { router } from "./router/router";
import "./assets/icon/iconfont.css";
import vue3JsonExcel from 'vue3-json-excel';

createApp(App)
.use(router)
.component('Vue3JsonExcel', vue3JsonExcel)
.use(ElementPlus)
.mount('#app')
