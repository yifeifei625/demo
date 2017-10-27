<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link to="/test/test2">to test2</router-link>
    <h2>yf test1</h2>
  </div>
</template>

<script>
export default {
  name: 'test1',
  data () {
    return {
      msg: 'hello ~ This page is test1',
    }
  },
  methods:{
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
