<template>
    <div>
        <h1 class="pageHeader">Contact</h1>
        <br/>

        <b-card border-variant="dark" class="cardWidth" style="max-width: 864px;">
          <b-row no-gutters>
            <b-col class="pictureMarginBelow" md="6">
              <b-card-img :src="require('@/assets/joe-portrait.jpg')" img-alt="Pic of Joe"></b-card-img>
            </b-col>
            <b-col md="6" v-if="show">
              <b-card-title style="text-align: center;">Send me a message!</b-card-title>
              <b-form id="contact-form" @submit="onSubmit" @reset="onReset" ref="form">
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
                <b-form-group id="input-group-email" label-cols="4" content-cols="8" label="Email address:" label-for="input-email">
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
                      <b-button v-on:click="requestLocation" style="background-color: white; border: none;">
                        <b-icon-geo-alt-fill
                          variant="primary"
                        ></b-icon-geo-alt-fill>
                      </b-button>
                    </template>
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

                <b-row no-gutters>
                  <b-col class="align-right">
                    <!-- Submit Button -->
                    <b-button type="submit" variant="primary">Send</b-button>
                  </b-col>
                  <b-col>
                    <!-- Reset Button -->
                    <b-button type="reset" variant="danger">Reset</b-button>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
            <b-col md="6" v-if="!show">
              <b-card-title>Message Received, Thank You!</b-card-title>
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
    text-align: left;
}
@media only screen and (min-width: 207px) {
  .align-right {
    text-align: right;
  }
}
a {
  color: #DCDCDC;
  text-decoration: none;
}
@media only screen and (max-width: 767px) {
  .pictureMarginBelow {
    margin-bottom: 20px;
  }
}
</style>