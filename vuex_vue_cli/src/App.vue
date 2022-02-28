<template>
  <div id="app" class="col-md-6 mt-5 p-3 bg-light rounded shadow-sm mx-auto">
    <div class="text-center">
      <img alt="Vue logo" src="./assets/logo.png">
      <p>Number: {{getNumber}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  computed: {
    getNumber: function() {
      return this.$store.state.number
    }
  }
}
</script>

<style>

</style>
