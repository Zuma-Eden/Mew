import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueHighlightJS from 'vue3-highlightjs'
// import 'highlight.js/styles/solarized-light.css'
import 'highlight.js/styles/qtcreator_light.css'

import "./plugins/style in attribute"

createApp(App)
    .use(router)
    .use(store)
    .use(VueHighlightJS)
    .mount('#app')




