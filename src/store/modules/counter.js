/*
 * @Author: duchengdong
 * @Date: 2020-08-28 14:50:49
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-08-28 15:48:38
 * @Description:
 */
const counter = {
    state: () => ({
        count: 0,
    }),
    mutations: {
        increment(state) {
            // 这里的 `state` 对象是模块的局部状态
            state.count++;
        },
    },
    actions: {
        incrementAsync({ commit }) {
            setTimeout(() => {
                commit("increment");
            }, 1000);
        },
    },

    getters: {
        doubleCount(state) {
            return state.count * 2;
        },
    },
};

export default counter;
