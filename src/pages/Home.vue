<template>
  <h1>Home</h1>
  <HelloWorld />
  <Table1 />
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Table1 from '@/components/Table1.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Table1
  }
}
</script>

<style>
</style>