//import Vue from 'vue'
//import Router from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// const Home = () => import('@/components/Home.vue')
// const Projects = () => import('@/components/Projects.vue')
// const Contact = () => import('@/components/Contact.vue')
import Home from './components/Home.vue'
// import Projects from './components/Projects.vue'
// import Contact from './components/Contact.vue'
/*
const routes = [
  { 
    Path: '',
    redirect: '/home' 
  },
  { 
    Path: '/home',
    component: Home
  },
  { 
    Path: '/projects',
    component: Projects
  },
  { 
    Path: '/contact',
    component: Contact
  }
]*/
const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home 
  },
  { 
    path: '/projects',
    name: 'Projects',
    component: () => import('./components/Projects.vue')
  },
  { 
    path: '/contact', 
    name: 'Contact',
    component: () => import('./components/Contact.vue')
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

//const app = Vue.createApp({})

//app.use(router)

//app.mount('#app')

export default router

/*
Vue.use(Router);

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