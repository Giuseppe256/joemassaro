<template>
  <div class="mt-0" id="app">
    <div class="mx-0 px-0 pt-0">
      <NavBar />
    </div>
    <router-view id="page-content" />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Home msg="Welcome to Your Vue.js App"/> -->
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
  // },
  // computed: {
  //   username() {
  //     return this.$route.params.username
  //   },
  // },
  // methods: {
  //   goToDashboard() {
  //     if (isAuthenticated) {
  //       this.$router.push('/dashboard')
  //     } else {
  //       this.$router.push('/login')
  //     }
  //   },
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #DCDCDC;
  margin-top: 60px;
  background-color: #1c1e21;
  position: relative;
  min-height: calc(100vh - 60px);
}
#page-content {
  padding-bottom: 60px;
}
.pageHeader {
  padding-top: 20px;
}
.cardWidth {
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>
