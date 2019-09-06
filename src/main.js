import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";
import "./assets/scss/style.scss";
import AOS from "aos";
import VueLazyload from "vue-lazyload";
import VueScrollTo from "vue-scrollto";

Vue.config.productionTip = false;

Vue.use(VueScrollTo,{
  duration: 200,
  easing: "ease-in-out",
  cancelable: false
});
Vue.use(VueLazyload);
AOS.init();

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
