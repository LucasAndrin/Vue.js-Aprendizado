<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6 mx-auto mt-5">
        <div class="p-4 bg-light rounded shadow">
          <span class="position-relative start-0 top-0 text-muted">App.vue</span>
          <servidor></servidor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Servidor from './components/Servidor.vue';
export default {
  name: "App",
  components: {
    'servidor': Servidor,
  },
};
</script>

<style>
</style>
