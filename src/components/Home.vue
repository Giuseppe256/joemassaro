<template>
  <div>
    <!-- <h1 class="pageHeader">Hello.</h1> -->

    <div id="quote-card" class="pageHeader">
      <h2>
        “The code you write makes you a programmer.<br>
        The code you delete makes you a good one.<br>
        The code you don’t have to write makes you a great one.”
      </h2>

      <b-link id="quote-link" href="https://twitter.com/mariofusco?lang=en" target="_blank">
        <h5>
          <b-icon-chat-quote-fill></b-icon-chat-quote-fill>
          Mario Fusco
        </h5>
      </b-link>
    </div>

    <b-link href="/Joe Massaro Resume.pdf" target="_blank">
      <b-button pill size="lg" variant="primary">Download Resume
        <b-icon-download aria-hidden="true"></b-icon-download>
      </b-button>
    </b-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #DCDCDC;
}
#quote-card {
  margin: 50px 20px 50px 20px;
  background-color: none !important;
}
#quote-card h2 {
  line-height: 2.5;
}
#quote-link {
  text-decoration: none;
}
@keyframes quote-animation {
  from {opacity: 0;}
  to {opacity: 100;}
}
#quote-card, #quote-link {
  animation-name: quote-animation;
  animation-duration: 5s;
  animation-iteration-count: 1;
}
</style>
