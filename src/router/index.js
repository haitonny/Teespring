import Vue from "vue";
import VueRouter from "vue-router";
import TeespringHome from "@/view/Homepage/TeespringHome.vue";
import TeespringShop from "@/view/Shop/TeespringShop";
import Apparel from "@/view/Apparel/Apparel";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TeespringHome",
    component: TeespringHome
  },
  {
    path: "/teespring-shop",
    name: "shop",
    component: TeespringShop
  },
  {
    path: "/apparel",
    name: "apparel",
    component: Apparel
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
