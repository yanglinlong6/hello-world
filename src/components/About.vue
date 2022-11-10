<!--
 * @Author: duchengdong
 * @Date: 2020-08-28 13:38:38
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-08-28 16:45:10
 * @Description: 
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ doubleCount }}</div>
    <el-button>Default</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "about",
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["counter"]),
    ...mapGetters(["doubleCount"]),
  },
  methods: {
    ...mapMutations(["increment"]),
  },
};
</script>
