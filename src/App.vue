<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/Student">Student</router-link> |
    <router-link to="/Teacher">Teacher</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
