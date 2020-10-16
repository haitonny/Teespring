import Vue from "vue";
import App from "./App.vue";
import "./assets/css/tailwind.css";
import router from "./router";
import VueResponsiveProvide from "vue-provide-responsive";

Vue.use(VueResponsiveProvide, {
  breakpoints: {
    mobile: 768
    // will be converted to responsive.isMobile helper (works exactly like a computed)
    // will be true if the viewport width is less or equals 768 pixels
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
