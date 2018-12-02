import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import store from './store'

Vue.config.productionTip = false

window.BASE_URL = 'https://obos.herokuapp.com' || 'http://localhost:3000'
window.axios = require('axios')
window.Joi = require('joi')

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
