import {
  GET_ITEM
} from "../mutation-types";

export default {
  namespaced: true,
  state: () => ({
    itemList: [],
  }),
  mutations: {
    [GET_ITEM](state, payload) {

      state.itemList = payload.data;
    }
  },
  actions: {
    [GET_ITEM]: ({
        commit
      }, item) =>
      commit([GET_ITEM], item)
  },
  getters: {
    getteritem: state => state.itemList,
  }
};
