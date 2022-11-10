<!--
 * @Author: duchengdong
 * @Date: 2020-08-28 13:37:55
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-08-28 15:52:24
 * @Description: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>{{ counter.count }}</div>
    <button @click="increment">+1</button>
    <button @click="incrementAsync">Async+1</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "home",
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["counter"]),
  },
  components: {
    HelloWorld,
  },
  methods: {
    ...mapMutations(["increment"]),
    ...mapActions(["incrementAsync"]),
  },
};
</script>
