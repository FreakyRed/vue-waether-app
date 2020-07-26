import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      { path: "/", component: () => import("./components/Home.vue") },
      {
        path: "/cityweather",
        component: () => import("./components/CityWeather.vue")
      },
      {
        path: "*",
        component: () => import("./components/NotFoundComponent.vue")
      }
    ]
  });
}
