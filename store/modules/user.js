import {
  GET_USER
} from "../mutation-types";

export default {
  namespaced: true,
  state: () => ({
    userList: [],
  }),
  mutations: {
    [GET_USER](state, payload) {
      state.userList = payload;
    }
  },
  actions: {
    [GET_USER]: ({
        commit
      }, user) =>
      commit([GET_USER], user)
  },
  getters: {
    getteruser: state => state.userList,
  }
};
