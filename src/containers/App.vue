<template>
  <div id="app">
    <explore :value="inputValue" :on-change="handleChange" ></explore>
    <router-view></router-view>
  </div>
</template>

<script src="./App.js">
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
