<template>
    <div>
        <h1 class="pageHeader">Contact</h1>
        <br/>

        <b-card class="cardWidth" border-variant="dark">
          <b-row no-gutters>
            <!-- Picture Column -->
            <b-col md="4">
              <b-card-img :src="require('@/assets/joe-portrait.jpg')" img-alt="Pic of Joe"></b-card-img>
            </b-col>

            <!-- Content Column -->
            <b-col md="8">
              <b-container fluid>
                <!-- Name -->
                <b-row no-gutters class="my-4">
                  <h2>Joe Massaro</h2>
                </b-row>

                <!-- Email -->
                <b-row no-gutters class="mb-4">
                  <b-col cols="8" class="align-left">
                    <b-row no-gutters>
                      <h3>Email</h3>
                    </b-row>
                    <b-row no-gutters>
                      <h5><a href="mailto:massaro.jp256@gmail.com?subject=Project%20Proposal">massaro.jp256@gmail.com</a></h5>
                    </b-row>                  </b-col>
                  <b-col cols="4">
                    <b-link onclick="this.blur();" href="mailto:massaro.jp256@gmail.com?subject=Project%20Proposal">
                      <b-img class="icon-size" :src="require('@/assets/email-icon.svg')"></b-img>
                    </b-link>
                  </b-col>
                </b-row>

                <!-- Github -->
                <b-row no-gutters class="mb-4">
                  <b-col cols="8" class="align-left">
                    <b-row no-gutters>
                      <h3>GitHub</h3>
                    </b-row>
                    <b-row no-gutters>
                      <h5><a href="https://github.com/Giuseppe256" target="_blank">https://github.com/Giuseppe256</a></h5>
                    </b-row>
                  </b-col>
                  <b-col cols="4">
                    <b-link onclick="this.blur();" href="https://github.com/Giuseppe256" target="_blank">
                      <b-img class="icon-size" :src="require('@/assets/GitHub-icon.png')"></b-img>
                    </b-link>
                  </b-col>
                </b-row>

                <!-- LinkedIn -->
                <b-row no-gutters class="mb-4">
                  <b-col cols="8" class="align-left">
                    <b-row no-gutters>
                      <h3>LinkedIn</h3>
                    </b-row>
                    <b-row no-gutters>
                      <h5><a href="https://www.linkedin.com/in/massarojoe/" target="_blank">https://www.linkedin.com/in/massarojoe</a></h5>
                    </b-row>
                  </b-col>
                  <b-col cols="4">
                    <b-link onclick="this.blur();" href="https://www.linkedin.com/in/massarojoe/" target="_blank">
                      <b-img class="icon-size" :src="require('@/assets/linkedin-icon.svg')"></b-img>
                    </b-link>
                  </b-col>
                </b-row>

                <!-- Phone -->
                <b-row no-gutters class="mb-4">
                  <b-col cols="8" class="align-left">
                    <b-row no-gutters>
                      <h3>Phone</h3>
                    </b-row>
                    <b-row no-gutters>
                      <h5>(812) 304-9419</h5>
                    </b-row>
                  </b-col>
                  <b-col cols="2" class="align-right">
                    <b-link onclick="this.blur();" href="tel://+18123049419">
                      <b-img class="icon-size" :src="require('@/assets/phone-icon.svg')"></b-img>
                    </b-link>
                  </b-col>
                  <b-col cols="2" class="align-left">
                    <b-link onclick="this.blur();" href="sms://+18123049419">
                      <b-img class="icon-size" :src="require('@/assets/text-icon.svg')"></b-img>
                    </b-link>
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-card>
        <br/><br/>
    </div>
</template>

<!-- <script>
export default {
    name: 'Contact'
}
</script> -->

<style scoped>
.cardWidth {
    background-color: #404040;
}
.align-left {
  text-align: left;
}
.align-right {
  text-align: right;
}
.icon-size {
  height: 80px;
}
@media only screen and (max-width: 1000px) {
  .icon-size {
    height: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .icon-size {
    height: 50px;
  }
}
a {
  color: #DCDCDC;
  text-decoration: none; /* no underline */
}
</style>