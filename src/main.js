import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { NavbarPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import BootstrapVue3 from 'bootstrap-vue-3'
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import IconsPlugin from 'bootstrap-vue'

const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
//app.use(BootstrapVue)
app.use(NavbarPlugin)
app.use(BootstrapVueIcons)
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