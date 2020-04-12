import {
  GET_WEATHER
} from "../mutation-types";

export default {
  namespaced: true,
  state: () => ({
    address: "",
    update: '',
    weatherList: []
  }),
  mutations: {
    [GET_WEATHER](state, payload) {
      state.address = `${payload[0].province}省${payload[0].city}`;
      state.update = `更新时间：${payload[0].reporttime}`;
      state.weatherList = payload[0].casts;
    }
  },
  actions: {
    [GET_WEATHER]: ({
        commit
      }, weather) =>
      commit([GET_WEATHER], weather)
  },
  getters: {
    getteraddress: state => state.address,
    getterupdate: state => state.update,
    getterweatherList: state => state.weatherList
  }
};
