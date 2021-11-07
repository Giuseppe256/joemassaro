import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { NavbarPlugin } from 'bootstrap-vue'
import BootstrapVue3 from 'bootstrap-vue-3'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
app.use(NavbarPlugin)
app.mount('#app')

// createApp(App)
//     .use(router)
//     .use(BootstrapVue)
//     .use(NavbarPlugin)
//     .mount('#app')

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
// Vue.use(NavbarPlugin)

// Vue.config.productionTip = false

// new Vue({
//     el: '#app',
//     router,
//     template: '<App/>',
//     components: {
//         App
//     },
//     render: h => h(App),
// }).$mount('#app')