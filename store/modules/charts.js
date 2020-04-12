import {
  GET_CHARTS
} from "../mutation-types";

export default {
  namespaced: true,
  state: () => ({
    chartsObj: {
      countChartsX: [],
      countChartsY: [],
    },
  }),
  mutations: {
    [GET_CHARTS](state, payload) {
      state.chartsObj.countChartsX = payload.Sname;
      state.chartsObj.countChartsY = payload.Scount;
    }
  },
  actions: {
    [GET_CHARTS]: ({
        commit
      }, charts) =>
      commit([GET_CHARTS], charts)
  },
  getters: {
    gettercharts: state => state.chartsObj,
  }
};
