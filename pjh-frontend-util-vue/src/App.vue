<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <UtilTest/> -->
  <StplTest/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import UtilTest from './components/UtilTest.vue'
import StplTest from './components/StplTest.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // UtilTest,
    StplTest,
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
