<template>
    <div>
        <b-navbar toggleable="md" variant="dark" fixed="top" type="dark" class="header">
            <router-link class="router-link" to="/">
                <b-navbar-brand class="brand" href="/">Joe Massaro</b-navbar-brand>
            </router-link>
            
            <b-navbar-toggle class="toggleButton" target="nav-collapse">
                <template #default="{ expanded }">
                    <b-icon-chevron-bar-up v-if="expanded"></b-icon-chevron-bar-up>
                    <b-icon-chevron-bar-down v-else></b-icon-chevron-bar-down>
                </template>
            </b-navbar-toggle>
                
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

                <b-navbar-nav class="iconList">
                    <b-nav-item href="mailto:massaro.jp256@gmail.com?subject=Project%20Proposal">
                        <b-icon-envelope-fill
                            variant="warning"
                        ></b-icon-envelope-fill>
                        <span class="tooltipText">Email</span>
                    </b-nav-item>
                   
                    <b-nav-item href="https://github.com/Giuseppe256" target="_blank">
                        <b-icon-github
                            style="color: white;"
                        ></b-icon-github>
                        <span class="tooltipText">GitHub</span>
                    </b-nav-item>

                    <b-nav-item href="https://www.linkedin.com/in/massarojoe/" target="_blank">
                        <b-icon-linkedin
                            style="color: #0072b1; background-color: white; border-radius: 15px;"
                        ></b-icon-linkedin>
                        <span class="tooltipText">LinkedIn</span>
                    </b-nav-item>

                    <b-nav-item href="tel://+18123049419">
                        <b-icon-telephone-outbound-fill 
                            variant="success"
                        ></b-icon-telephone-outbound-fill>
                        <span class="tooltipText">Call</span>
                    </b-nav-item>

                    <b-nav-item href="sms://+18123049419">
                        <b-icon-chat-left-text-fill
                            style="color: #7952b3;"
                        ></b-icon-chat-left-text-fill>
                        <span class="tooltipText">Text</span>
                    </b-nav-item>                   
                </b-navbar-nav>
            </b-collapse>
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
    /* background-color: #242526; */
    width: 100vw;
}
.brand {
    display: list-item;
    list-style-type: none;
    padding-left: 20px;
}
@media only screen and (max-width: 767px) {
    .navbar-collapse.collapsing {
        background-color: #212529;
    }
    .navbar-collapse.collapse {
        background-color: #212529;
        margin-top: -8px;
    }
}
.router-link {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    height: 60px;
    padding: 10px 10px;
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
@media only screen and (min-width: 768px) {
    .iconList {
        margin-left: auto;
        margin-right: 30px;
    }
    .iconList li:hover .tooltipText {
        visibility: visible;
    }

}
.iconList svg {
    height: 25px;
    width: 25px;
}
.iconList li:hover {
    background-color: black;
    border-radius: 10px;
}
.toggleButton {
    margin-right: 30px;
    margin-top: -14px;
}
.tooltipText {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 10px;
    border-radius: 15px;
    
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;

    width: 100px;
    margin-left: -62px;
    top: 100%;
}
.tooltipText::after {
  content: " ";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}
</style>