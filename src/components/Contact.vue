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
                      <b-icon-envelope-fill
                        variant="warning"
                        class="icon-size"
                      ></b-icon-envelope-fill>
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
                      <b-icon-github
                        class="icon-size"
                      ></b-icon-github>
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
                      <b-icon-linkedin
                        style="color: #0072b1; background-color: white; border-radius: 15px;"
                        class="icon-size"
                      ></b-icon-linkedin>
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
                  <b-col cols="2">
                    <b-link onclick="this.blur();" href="tel://+18123049419">
                      <b-icon-telephone-outbound-fill 
                        variant="success"
                        class="icon-size"
                      ></b-icon-telephone-outbound-fill>
                    </b-link>
                  </b-col>
                  <b-col cols="2">
                    <b-link onclick="this.blur();" href="sms://+18123049419">
                      <b-icon-chat-left-text-fill
                        style="color: #7952b3;"
                        class="icon-size"
                      ></b-icon-chat-left-text-fill>
                    </b-link>
                  </b-col>
                </b-row>
                
                <!-- Contact Form -->
                <b-row no-gutters v-if="show">
                  <h2>Send me a message</h2>
                  <b-form @submit="onSubmit" @reset="onReset" ref="form">
                    <!-- Name -->
                    <b-form-group id="input-group-name" label="Name:" label-for="input-name">
                      <b-form-input
                        id="input-name"
                        v-model="form.userName"
                        placeholder="Enter name"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <!-- Email -->
                    <b-form-group id="input-group-email" label-cols="4" content-cols="8" label-align="left" label="Email address:" label-for="input-email">
                      <b-form-input
                        id="input-email"
                        v-model="form.userEmail"
                        type="email"
                        placeholder="Enter email"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <!-- Phone -->
                    <b-form-group id="input-group-phone" label-cols="4" content-cols="8" label-align="left" label="Phone number (optional):" label-for="input-phone">
                      <b-form-input
                        id="input-phone"
                        v-model="form.userPhone"
                        type="tel"
                        placeholder="Enter phone number"
                      ></b-form-input>
                    </b-form-group>

                    <!-- Address -->
                    <b-form-group id="input-group-address" label-cols="4" content-cols="8" label-align="left" label="Address (optional):" label-for="input-address">                      
                      <b-input-group>
                        <vue-google-autocomplete
                          id="input-address"
                          ref="userAddress"
                          classname="form-control"
                          placeholder="Start typing address"
                          v-on:placechanged="getAddressData"
                        ></vue-google-autocomplete>

                        <template #append>
                          <b-button v-on:click="requestLocation" style="background-color: white; border: none;" class="request-location-button">
                            <b-icon-geo-alt-fill
                              variant="primary"
                            ></b-icon-geo-alt-fill>
                          </b-button>
                        </template>
                        <!-- <b-icon-geo-alt-fill
                          variant="primary"
                          shift-v="28"
                          shift-h="185"
                          class="location-icon"
                        ></b-icon-geo-alt-fill> -->
                      </b-input-group>
                    </b-form-group>

                    <!-- Subject -->
                    <b-form-group id="input-group-subject" label="Subject:" label-for="input-subject">
                      <b-form-input
                        id="input-subject"
                        v-model="form.subject"
                        placeholder="Subject"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <!-- Message -->
                    <b-form-group id="input-group-message" label="Message:" label-for="input-message">
                      <b-form-textarea
                        id="input-message"
                        v-model="form.message"
                        placeholder="Message"
                        required
                      ></b-form-textarea>
                    </b-form-group>

                    <!-- Submit Button -->
                    <b-button type="submit" variant="primary">Send</b-button>
                    <!-- Reset Button -->
                    <b-button type="reset" variant="danger">Reset</b-button>
                  </b-form>
                </b-row>
                
                <b-row no-gutters v-if="!show">
                  <h3>Message Received, Thank You!</h3>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-card>
        <br/><br/>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import VueGoogleAutocomplete from 'vue-google-autocomplete';

export default {
  components: { 
    VueGoogleAutocomplete
  },
  data() {
    return {
      form: {
        userEmail: '',
        userPhone: '',
        userName: '',
        subject: '',
        message: ''
      },
      userAddress: '',
      show: true
    }
  },
  methods: {
    getAddressData: function (addressData, placeResultData, id) {
      this.userAddress = addressData;
    },
    onSubmit(event) {
      event.preventDefault();
      let formData = {
        userEmail: this.form.userEmail,
        userPhone: this.form.userPhone,
        userAddress: addressToString(this.userAddress),
        userName: this.form.userName,
        subject: this.form.subject,
        message: this.form.message
      }
      emailjs.send('service_4v2wma8', 'template_cwdruor', formData, 'user_YibjcvrnO2KJT5IcroZ9b')
        .then((response) => {
          console.log('Success!', response.status, response.text);
          this.show = false;
        }, (error) => {
          console.log("Failed...", error.text);
          alert("Message did not send...Try again");
      });
    },
    onReset(event) {
      event.preventDefault()
      // Reset form values
      this.form.userEmail = '';
      this.form.userPhone = '';
      this.form.userAddress = '';
      this.form.userName = '';
      this.form.subject = '';
      this.form.message = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    requestLocation() {
      this.$refs.userAddress.geolocate();
    }
  }
}

function addressToString(addressData) {
  let output = "";
  if (addressData.street_number == undefined) {
  }
  else {
    output = addressData.street_number + " " + addressData.route + ", " + addressData.locality + ", " + addressData.administrative_area_level_1 + " " + addressData.postal_code;
  }
  return output;
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
  width: 80px;
}
@media only screen and (max-width: 1000px) {
  .icon-size {
    height: 60px;
    width: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .icon-size {
    height: 50px;
    width: 50px;
  }
}
a {
  color: #DCDCDC;
  text-decoration: none;
}
.request-location-button:focus {
  outline: none;
  box-shadow: none;
}
/* .location-icon {
  position: absolute;
  z-index: 1;
} */
</style>