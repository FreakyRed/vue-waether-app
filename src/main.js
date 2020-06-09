import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";

import { createRouter } from "./router";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const router = createRouter();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
