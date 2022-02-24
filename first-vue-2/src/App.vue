<template>
  <div id="app">
    <p>Componente App.vue</p>
    <new />
  </div>
</template>

<script>
import New from './components/NewComponent.vue'

export default {
  name: 'App',
  components: {
    New
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
