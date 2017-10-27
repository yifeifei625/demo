<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <router-link to="/test">点我进入主页面</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Vue.js App',
    }
  },
  mounted() {
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
