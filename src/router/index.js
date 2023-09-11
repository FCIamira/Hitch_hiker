import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/welcomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",

    component: () => import("../views/login.vue"),
  },
  {
    path: "/signup",
    name: "signup",

    component: () => import("../views/signup.vue"),
  },
  {
    path: "/mainPage",
    name: "mainPage",
    component: () => import("../views/layout.vue"),
    children: [
      {
        path: "",
        name: "home",

        component: () => import("../views/home.vue"),
      },
      {
        path: "AddTrips",
        name: "AddTrips",

        component: () => import("../views/AddTrips.vue"),
      },
      {
        path: "AddShipment",
        name: "AddShipment",

        component: () => import("../views/AddShipment.vue"),
      },
      {
        path: "pofile",
        name: "pofile",

        component: () => import("../views/pofile.vue"),
      },
      {
        path: "trips",
        name: "trips",

        component: () => import("../views/trips.vue"),
      },
      {
        path: "shipment",
        name: "shipment",

        component: () => import("../views/shipment.vue"),
      },
      {
        path: "shipment/:id",
        name: "shipmentInfo",

        component: () => import("../views/shipmentInfo.vue"),
      },
      {
        path: "trip/:id",
        name: "tripInfo",

        component: () => import("../views/tripInfo.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: () => import("../views/error.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
