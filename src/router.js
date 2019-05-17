import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import EPay from "./views/EPay.vue";
import OPay from "./views/OPay.vue";

Vue.use(Router);

export default new Router({
  mode: process.env.CORDOVA_PLATFORM ? "hash" : "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/epay",
      name: "epay",
      component: EPay
    },
    {
      path: "/opay",
      name: "opay",
      component: OPay
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function() {
        return import(/* webpackChunkName: "about" */ "./views/About.vue");
      }
    }
  ]
});
