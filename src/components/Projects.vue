<template>
    <div>
        <h1 class="pageHeader">Projects</h1>
        
        <br/>

        <!-- Community Action Program of Evansville -->
        <b-card class="cardWidth" border-variant="light">
            <h3 class="mb-2">Community Action Program of Evansville</h3>
            <b-row no-gutters align-h="between">
                <b-col md="3">
                    <b-row class="m-2" no-gutters style="background-color: white; max-height: 119.73px; border-radius: 10px;">
                        <b-link href="https://www.capeevansville.org/" target="_blank">
                            <b-card-img style="max-width: 219px;" src="https://www.capeevansville.org/wp-content/uploads/2019/03/CAPE-logo2.jpg" img-alt="CAPE"></b-card-img>
                        </b-link>
                    </b-row>
                </b-col>
                
                <b-col md="8" style="px-4">
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 class="align-left">About:</h5>
                        </b-col>
                        <b-col cols="8">
                            <p class="align-left">Website built in WordPress for a non-profit organiztion in Evansville, IN</p>
                        </b-col>
                    </b-row>
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 class="align-left">My role:</h5>
                        </b-col>
                        <b-col cols="8">
                            <ul style="text-align: left; padding-inline-start: 20px">
                                <li>Updated and redesigned each page to give the site a modern look</li>
                                <li>Elementor is the main plugin used to structure the website
                                    <ul>
                                        <li>Also used several additional plugins, custom JS, and CSS</li>
                                    </ul>
                                </li>
                                <li>Continuing to update website as needed</li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row align-h="center" no-gutters>
                <b-col md="2">
                    <b-button style="width: 100%" variant="primary" onclick="this.blur();" href="https://www.capeevansville.org/" target="_blank">Visit</b-button>
                </b-col>
            </b-row>
        </b-card>

        <br/>

        <!-- Calculator App -->
        <b-card class="cardWidth" border-variant="light">
            <h3 class="mb-2">Calculator App</h3>
            <b-row no-gutters align-h="between">
                <b-col md="3">
                    <b-row class="m-2" no-gutters style="background-color: white; max-height: 120px; border-radius: 10px;">
                        <b-link href="https://github.com/Giuseppe256/JoeCalc" target="_blank">
                            <b-card-img style="height: 120px; padding-top: 10px; padding-bottom: 10px;" :src="require('@/assets/calculator-icon.svg')"></b-card-img>
                        </b-link>
                    </b-row>
                </b-col>

                 <b-col md="8" style="px-4">
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 class="align-left">About:</h5>
                        </b-col>
                        <b-col cols="8">
                            <p class="align-left">Clone of built-in calculator on Samsung phones</p>
                        </b-col>
                    </b-row>
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 class="align-left">My role:</h5>
                        </b-col>
                        <b-col cols="8">
                            <ul style="text-align: left; padding-inline-start: 20px">
                                <li>Created the app using <a href="https://dotnet.microsoft.com/apps/xamarin/xamarin-forms" target="_blank">Xamarin Forms</a>
                                    <ul>
                                        <li>An open-source framework for building iOS, Android, and Windows apps</li>
                                    </ul>
                                </li>
                                <li>Main calcutator functions work, still working on adding features and styling</li>
                                <li>App is not yet available in any app store, but can be installed on Android phones by running the .apk file</li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row align-h="center" no-gutters>
                <b-col md="2">
                    <b-button style="width: 100%" variant="primary" onclick="this.blur();" href="https://github.com/Giuseppe256/JoeCalc" target="_blank">View Repository</b-button>
                </b-col>
                <b-col md="2">
                    <b-button style="width: 100%" variant="primary" onclick="this.blur();" href="https://github.com/Giuseppe256/JoeCalc/raw/master/com.companyname.joecalc.apk" target="_blank">Download</b-button>
                </b-col>
            </b-row>
        </b-card>

        <br/>

        <!-- First Baptist Church Dunkirk -->
        <b-card class="cardWidth" border-variant="light">
            <h3 class="mb-2">First Baptist Church Dunkirk</h3>
            <b-row no-gutters align-h="between">
                <b-col md="3">
                    <b-row class="m-2" no-gutters style="background-color: #003651; max-height: 120px; border-radius: 10px;">
                        <b-link href="https://dunkirkbaptist.org/" target="_blank">
                            <b-card-img style="max-width: 255px; padding-top: 10px; padding-bottom: 10px;" src="https://dunkirkbaptist.org/wp-content/uploads/2017/12/fbcDunkirk_2.png" img-alt="DunkirkCCA"></b-card-img>
                        </b-link>
                    </b-row>
                </b-col>
                
                <b-col md="8" style="px-4">
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 style="text-align: left;">About:</h5>
                        </b-col>
                        <b-col cols="8">
                            <p style="text-align: left;">Website built in WordPress for a church in Dunkirk, NY</p>
                        </b-col>
                    </b-row>
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 style="text-align: left;">My role:</h5>
                        </b-col>
                        <b-col cols="8">
                            <ul style="text-align: left; padding-inline-start: 20px">
                                <li>Updated WordPress plugins and themes</li>
                                <li>Added feature to allow cloning/duplicating posts to improve client's ease of use</li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row align-h="center" no-gutters>
                <b-col md="2">
                    <b-button style="width: 100%" variant="primary" onclick="this.blur();" href="https://dunkirkbaptist.org/" target="_blank">Visit</b-button>
                </b-col>
            </b-row>
        </b-card>

        <br/>

        <!-- Dunkirk Central Christian Academy -->
        <b-card class="cardWidth" border-variant="light">
            <h3 class="mb-3">Dunkirk Central Christian Academy</h3>
            <b-row no-gutters align-h="between">
                <b-col md="3">
                    <b-row class="m-2" no-gutters style="background-color: white; max-height: 120px; border-radius: 10px;">
                        <b-link href="https://dunkirkcca.org/" target="_blank">
                            <b-card-img style="padding-top: 10px; padding-bottom: 10px; max-width: 299px;" src="https://dunkirkcca.org/wp-content/uploads/2018/02/logo2018small.png" img-alt="DunkirkCCA"></b-card-img>
                        </b-link>
                    </b-row>
                </b-col>
                
                <b-col md="8" style="px-4">
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 style="text-align: left;">About:</h5>
                        </b-col>
                        <b-col cols="8">
                            <p style="text-align: left">Website built in WordPress for a school in Dunkirk, NY</p>
                        </b-col>
                    </b-row>
                    <b-row no-gutters>
                        <b-col cols="3">
                            <h5 style="text-align: left">My role:</h5>
                        </b-col>
                        <b-col cols="8">
                            <ul style="text-align: left; padding-inline-start: 20px">
                                <li>Updated WordPress plugins and themes</li>
                                <li>Reformatted navigation bar and site content so each page matched the other pages</li>
                                <li>Resolved login issue where admin page of site was inaccessible by reverting to backup of site and fixing plugin issues</li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row align-h="center" no-gutters>
                <b-col md="2">
                    <b-button style="width: 100%" variant="primary" onclick="this.blur();" href="https://dunkirkcca.org/" target="_blank">Visit</b-button>
                </b-col>
            </b-row>
        </b-card>

        

        <br/>
    </div>
</template>

<!-- <script>
export default {
    name: 'Projects'
}
</script> -->

<style scoped>
.cardWidth {
    background-color: #404040;
}
.align-left {
    text-align: left;
}
</style>