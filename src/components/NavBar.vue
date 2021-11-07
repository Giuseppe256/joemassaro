<template>
    <div>
        <b-navbar type="dark" class="header" fixed="top" style="background-color: #242526">
            <b-navbar-nav>
                <router-link to="/">
                    <b-nav-item href="/">Home</b-nav-item>
                </router-link>

                <router-link to="/projects">
                    <b-nav-item href="/projects">Projects</b-nav-item>
                </router-link>

                <router-link to="/contact">
                    <b-nav-item href="/contact">Contact</b-nav-item>
                </router-link>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<!-- <template>
    <div>
        <b-navbar type="dark" class="header" fixed="top" style="background-color: #242526">
            <b-navbar-nav>
                <router-link :to="{ name: 'Home' }">
                    <b-nav-item href="/Home">Home</b-nav-item>
                </router-link>

                <router-link :to="{ name: 'Projects' }">
                    <b-nav-item href="/Projects">Projects</b-nav-item>
                </router-link>

                <router-link :to="{ name: 'Contact' }">
                    <b-nav-item href="/Contact">Contact</b-nav-item>
                </router-link>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template> -->


<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
</style>