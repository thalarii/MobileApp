import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "material-design-icons-iconfont/dist/material-design-icons.css";

var VueCordova = require("vue-cordova");
Vue.use(VueCordova);

Vue.config.productionTip = false;

// Vue.use(vuetify, {
//   iconfont: "md"
// });

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
