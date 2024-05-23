<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <clickcount/>
  <hovercount/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import clickcount from './components/clickcounter.vue'
import hovercount from './components/hover-count.vue'

export default {
  name: 'App',
  components: {
    clickcount,hovercount
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
