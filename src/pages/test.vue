<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link to="/hello">前往首页（返回hello页面）</router-link>
    <h2>--------测试嵌套路由，常用于导航--------</h2>
    <router-link to="/test/test1">前往test1页面</router-link>
    <router-link to="/test/test2">前往test2页面</router-link>
    <h2>--------测试Axios获取github数据，打开控制台就能查看效果哦--------</h2>
    <a @click="searchGithub" style="cursor: pointer;">Click this to test Axios</a>
    <h2>--------测试 Modal组件（用到vuex控制状态）--------</h2>
    <a @click="showModal" style="cursor: pointer;">Click this to show Modal</a>

    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>

    <modal>
      <div class="test-modal">
        <h3>hello modal</h3>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import modal from '@/components/popup/modal.vue'
export default {
  name: 'test',
  components: {
    modal
  },
  data () {
    return {
      msg: 'hello',
      time: '2017~'
    }
  },
  mounted() {
  },
  methods:{
    ...mapActions({
      showModal: 'popup/modal/showModal'
    }),
    searchGithub() {
      this.$http.get('/search/repositories',{
        q: 'javascript',
        sort: 'stars',
        order: 'desc'
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text
h1, h2 {
  font-weight: normal;
  color: lightslategray;
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
  display: inline-block;
  color: hotpink;
  padding: 0 10px;
}

.test-modal{
  background-color: #fff;
  padding: 50px 200px;
}
</style>
