<template>
    <div>
        <b-navbar type="dark" class="header">
            <router-link class="router-link" to="/">
                <b-navbar-brand class="brand" href="/">Joe Massaro</b-navbar-brand>
            </router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link class="router-link" to="/">
                        <b-nav-item href="/">Home</b-nav-item>
                    </router-link>

                    <router-link class="router-link" to="/projects">
                        <b-nav-item href="/projects">Projects</b-nav-item>
                    </router-link>

                    <router-link class="router-link" to="/contact">
                        <b-nav-item href="/contact">Contact</b-nav-item>
                    </router-link>
                </b-navbar-nav>
            </b-collapse>
            
            <!-- <b-navbar-nav>
                <router-link to="/">
                    <b-nav-item href="/">Home</b-nav-item>
                </router-link>

                <router-link to="/projects">
                    <b-nav-item href="/projects">Projects</b-nav-item>
                </router-link>

                <router-link to="/contact">
                    <b-nav-item href="/contact">Contact</b-nav-item>
                </router-link>
            </b-navbar-nav> -->
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
.header {
    height: 60px;
    padding: 0px;
    vertical-align: center;
    background-color: #242526;
    position: fixed;
    top: 0px;
    width: 100vw;
}
.brand {
    padding-left: 20px;
}
.router-link {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    height: 60px;
}
.router-link:hover {
    color: rgba(255, 255, 255, 0.75);
    background-color: black;
}
.router-link a {
    color: rgba(255, 255, 255, 0.75);
}
.router-link a:hover {
    color: rgba(255, 255, 255, 0.75);
}
</style>