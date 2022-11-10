/*
 * @Author: duchengdong
 * @Date: 2020-08-28 14:47:07
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-08-28 15:16:40
 * @Description: 
 */
import Vue from "vue";
import Vuex from "vuex";
import counter from './modules/counter'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {counter},
});