import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import item from './modules/item'
import weather from "./modules/weather";
import charts from './modules/charts'
import user from './modules/user'
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store = () => new Vuex.Store({
  modules: {
    item,
    weather,
    charts,
    user,
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
});

export default store;
