<template>
    <div>
        <h1 class="pageHeader">Projects</h1>
        
        <br/>

        <b-card-group deck>
            <!-- Community Action Program of Evansville -->
            <b-card 
                class="cardWidth" 
                border-variant="light"
                no-body
                >
                <b-card-body title="Community Action Program of Evansville">
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-row class="m-2 capeLogoBackground" no-gutters>
                                <b-link href="https://www.capeevansville.org/" target="_blank">
                                    <b-card-img class="capeLogo" src="https://www.capeevansville.org/wp-content/uploads/2019/03/CAPE-logo2.jpg" img-alt="CAPE"></b-card-img>
                                </b-link>
                            </b-row>
                        </b-col>

                        <b-col class="align-left" md="8">
                            <b-row no-gutters>
                                <b-card-sub-title sub-title-tag="h5">About</b-card-sub-title>
                                <b-card-text>Website built in WordPress for a non-profit organiztion in Evansville, IN</b-card-text>
                            </b-row>
                            <b-row no-gutters>
                                <b-card-sub-title sub-title-tag="h5">My Role</b-card-sub-title>
                                <b-card-text>
                                    <ul class="padding20">
                                        <li>Updated and redesigned each page to give the site a modern look</li>
                                        <li>Elementor is the main plugin used to structure the website
                                            <ul>
                                                <li>Also used several additional plugins, custom JS, and CSS</li>
                                            </ul>
                                        </li>
                                        <li>Continuing to update website as needed</li>
                                    </ul>
                                </b-card-text>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-card-body>
                
                <b-card-footer footer-bg-variant="dark">
                    <b-button
                    pill
                    class="m-2"
                    variant="primary" 
                    onclick="this.blur();" 
                    href="https://www.capeevansville.org/" 
                    target="_blank"
                    size="lg"
                    >
                        Open
                        <b-icon-box-arrow-up-right></b-icon-box-arrow-up-right>
                    </b-button>
                </b-card-footer>
            </b-card>

            <!-- Calculator App -->
            <b-card 
                class="cardWidth" 
                border-variant="light"
                no-body
                >
                <b-card-body title="Calculator App">
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-link href="https://github.com/Giuseppe256/JoeCalc" target="_blank">
                                <b-icon-calculator variant="success" class="calculatorIcon"></b-icon-calculator>
                            </b-link>
                        </b-col>

                        <b-col md="8" class="align-left">
                            <b-row no-gutters>
                                <b-card-sub-title sub-title-tag="h5">About</b-card-sub-title>
                                <b-card-text>Clone of built-in calculator on Samsung phones</b-card-text>
                            </b-row>

                            <b-row no-gutters>
                                <b-card-sub-title sub-title-tag="h5">My Role</b-card-sub-title>
                                <b-card-text>
                                    <ul class="padding20">
                                        <li>Created the app using <a href="https://dotnet.microsoft.com/apps/xamarin/xamarin-forms" target="_blank">Xamarin Forms</a>
                                            <ul>
                                                <li>An open-source framework for building iOS, Android, and Windows apps</li>
                                            </ul>
                                        </li>
                                        <li>Main calcutator functions work, still working on adding features and styling</li>
                                        <li>App is not yet available in any app store, but can be installed on Android phones by running the .apk file</li>
                                    </ul>
                                </b-card-text>
                            </b-row>
                        </b-col>
                    </b-row>
                </b-card-body>
                
                <b-card-footer footer-bg-variant="dark">
                    <b-button 
                        pill 
                        class="m-2" 
                        variant="primary" 
                        onclick="this.blur();" 
                        href="https://github.com/Giuseppe256/JoeCalc" 
                        target="_blank"
                        size="lg"
                        >
                            View Repository
                            <b-icon-box-arrow-up-right></b-icon-box-arrow-up-right>
                        </b-button>
                    <b-button 
                        pill 
                        class="m-2" 
                        variant="primary" 
                        onclick="this.blur();" 
                        href="https://github.com/Giuseppe256/JoeCalc/raw/master/com.companyname.joecalc.apk" 
                        target="_blank"
                        size="lg"
                        >
                            Download
                            <b-icon-download></b-icon-download>
                        </b-button>
                </b-card-footer>
            </b-card>

            <!-- First Baptist Church Dunkirk -->
            <b-card 
                class="cardWidth" 
                border-variant="light"
                no-body
                >
                <b-card-body title="First Baptist Church of Dunkirk, NY">
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-row class="m-2 fbcLogoBackground" no-gutters>
                                <b-link href="https://dunkirkbaptist.org/" target="_blank">
                                    <b-card-img class="fbcLogo" src="https://dunkirkbaptist.org/wp-content/uploads/2017/12/fbcDunkirk_2.png" img-alt="DunkirkCCA"></b-card-img>
                                </b-link>
                            </b-row>
                        </b-col>
                        
                        <b-col md="8" class="align-left">
                            <b-card-sub-title sub-title-tag="h5">About</b-card-sub-title>
                            <b-card-text>Website built in WordPress for a church in Dunkirk, NY</b-card-text>

                            <b-card-sub-title sub-title-tag="h5">My Role</b-card-sub-title>
                            <b-card-text>
                                <ul class="padding20">
                                    <li>Updated WordPress plugins and themes</li>
                                    <li>Added feature to allow cloning/duplicating posts to improve client's ease of use</li>
                                </ul>
                            </b-card-text>
                        </b-col>
                    </b-row>
                </b-card-body>

                <b-card-footer footer-bg-variant="dark">
                    <b-button 
                        pill 
                        class="m-2" 
                        variant="primary" 
                        onclick="this.blur();" 
                        href="https://dunkirkbaptist.org/" 
                        target="_blank"
                        size="lg"
                        >
                            Open
                            <b-icon-box-arrow-up-right></b-icon-box-arrow-up-right>
                        </b-button>
                </b-card-footer>
            </b-card>

            <!-- Dunkirk Central Christian Academy -->
            <b-card 
                class="cardWidth" 
                border-variant="light"
                no-body
                >
                <b-card-body title="Dunkirk Central Christian Academy">
                    <b-row no-gutters>
                        <b-col md="4">
                            <b-row class="m-2 ccaLogoBackground" no-gutters>
                                <b-link href="https://dunkirkcca.org/" target="_blank">
                                    <b-card-img class="ccaLogo" src="https://dunkirkcca.org/wp-content/uploads/2018/02/logo2018small.png" img-alt="DunkirkCCA"></b-card-img>
                                </b-link>
                            </b-row>
                        </b-col>
                        
                        <b-col md="8" class="align-left">
                            <b-row no-gutters>
                                <b-card-sub-title sub-title-tag="h5">About</b-card-sub-title>
                                <b-card-text>Website built in WordPress for a school in Dunkirk, NY</b-card-text>
                            </b-row>

                            <b-row no-gutters>
                                <b-card-sub-title sub-title-tag="h5">My Role</b-card-sub-title>
                                <b-card-text>
                                    <ul class="padding20">
                                        <li>Updated WordPress plugins and themes</li>
                                        <li>Reformatted navigation bar and site content so each page matched the other pages</li>
                                        <li>Resolved login issue where admin page of site was inaccessible by reverting to backup of site and fixing plugin issues</li>
                                    </ul>
                                </b-card-text>
                            </b-row>
                        </b-col>
                    </b-row>

                </b-card-body>

                <b-card-footer footer-bg-variant="dark">
                    <b-button 
                        pill 
                        class="m-2"
                        variant="primary" 
                        onclick="this.blur();" 
                        href="https://dunkirkcca.org/" 
                        target="_blank"
                        size="lg"
                        >
                            Open
                            <b-icon-box-arrow-up-right></b-icon-box-arrow-up-right>
                        </b-button>
                </b-card-footer>
            </b-card>
        </b-card-group>

        <br/>
    </div>
</template>

<style scoped>
.cardWidth {
    background-color: #404040;
    margin-bottom: 50px;
}
.align-left {
    text-align: left;
}
.padding20 {
    padding-inline-start: 20px;
}
.calculatorIcon {
    height: auto;
    width: 100%;
    max-height: 200px;
}
.capeLogoBackground {
    background-color: white; 
    max-height: 119.73px; 
    border-radius: 10px;
}
.capeLogo {
    max-width: 219px;
}
.fbcLogoBackground {
    background-color: #003651; 
    max-height: 120px; 
    border-radius: 10px;
}
.fbcLogo {
    max-width: 255px; 
    padding-top: 10px; 
    padding-bottom: 10px;
}
.ccaLogoBackground {
    background-color: white; 
    max-height: 120px; 
    border-radius: 10px;
}
.ccaLogo {
    padding-top: 10px; 
    padding-bottom: 10px; 
    max-width: 299px;
}
h5 {
    color: white !important;
}
.card-text {
    margin-bottom: 20px;
}
</style>