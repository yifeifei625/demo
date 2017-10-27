<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link to="/test/test1">to test1</router-link>
    <h2>yf test2</h2>
  </div>
</template>

<script>
export default {
  name: 'test2',
  data () {
    return {
      msg: 'hello ~ this page is test2',
    }
  },
  methods:{
  }
}
</script>

<style scoped>
a {
  color: #f09;
}
</style>
