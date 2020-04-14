import {
  GET_USER,
  USER_ADD
} from "../mutation-types";

export default {
  namespaced: true,
  state: () => ({
    userList: [],
  }),
  mutations: {
    [GET_USER](state, payload) {
      state.userList = payload;
    },
    [USER_ADD](state, payload) {
      let userList = state.userList;
      userList.unshift(payload);
      state.userList = userList;
    }
  },
  actions: {
    [GET_USER]: ({
        commit
      }, users) =>
      commit([GET_USER], users),
    [USER_ADD]: ({
        commit
      }, user) =>
      commit([USER_ADD], user)
  },
  getters: {
    getteruser: state => state.userList,
  }
};
