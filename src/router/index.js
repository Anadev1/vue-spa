import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add",
    name: "Add",
    component: () =>
      import("../views/Add.vue")
  },
  {
    path: "/edit",
    name: "Edit",
    component: () =>
      import("../views/Edit.vue"),
    props: true
  },
  {
    path: "/details",
    name: "Details",
    component: () =>
      import("../views/Details.vue"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
