<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to GAS-Clasp-Vue.js'
      }
    }
  }
</script>

<template>
  <div>
    <p>{{ msg }}</p>
    <el-button type="primary">Primary</el-button>
  </div> 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
