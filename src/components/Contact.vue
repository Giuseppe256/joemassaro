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
                
                <!-- Contact Form -->
                <b-row no-gutters>
                  <h2>Send me a message</h2>
                  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                    <!-- Email -->
                    <b-form-group id="input-group-1" label-cols="4" content-cols="8" label-size="lg" label-align="left" label="Email address:" label-for="input-1">
                      <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        placeholder="Enter email"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <!-- Name -->
                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                      <b-form-input
                        id="input-2"
                        v-model="form.name"
                        placeholder="Enter name"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <!-- Subject -->
                    <b-form-group id="input-group-3" label="Subject:" label-for="input-3">
                      <b-form-input
                        id="input-3"
                        v-model="form.subject"
                        placeholder="Subject"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <!-- Message -->
                    <b-form-group id="input-group-4" label="Message:" label-for="input-4">
                      <b-form-textarea
                        id="input-4"
                        v-model="form.message"
                        placeholder="Message"
                        required
                      ></b-form-textarea>
                    </b-form-group>

                    <!-- Submit Button -->
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <!-- Reset Button -->
                    <b-button type="reset" variant="danger">Reset</b-button>
                  </b-form>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-card>
        <br/><br/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        subject: '',
        message: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset form values
      this.form.email = ''
      this.form.name = ''
      this.form.subject = ''
      this.form.message = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

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
  text-decoration: none;
}
</style>