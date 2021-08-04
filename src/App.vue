<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import theHeader from './components/header.vue'

export default {
  name: 'App',
  components: {
    'app-header': theHeader
  },
  
  data() {
    return {
      
    }
  }
}
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  width: 100%;
}
</style>
