
const { createApp, h } = Vue

const NotFoundComponent = { template: '<p>Page not found</p>' }
const HomePage = { template: '<p>Home Page</p>' }
const ContactPage = { template: '<p>Contact Page</p>' }

const routes = {
  '/': HomePage,
  '/contact': ContactPage
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent
    }
  },

  render() {
    return h(this.CurrentComponent)
  }
}

createApp(SimpleRouter).mount('#app')
/*
import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '/Projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        }
    ]
  })

*/

/*Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '/Projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        }
    ]
});
*/