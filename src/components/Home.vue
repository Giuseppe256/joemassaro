<template>
  <div>
    <h1 id="home-header" class="pageHeader">Home</h1>
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
#home-header {
  margin-bottom: 100px;
}
</style>
