import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    
    component: () =>
      import("../views/login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    
    component: () =>
      import("../views/signup.vue"),
  },
  {
    path: "/mainPage",
    name: "mainPage",
    
    component: () =>
      import("../views/mainPage.vue"),
  },
  {
    path: "/AddTrips",
    name: "AddTrips",
    
    component: () =>
      import("../views/AddTrips.vue"),
  },
  {
    path: "/AddShipment",
    name: "AddShipment",
    
    component: () =>
      import("../views/AddShipment.vue"),
  },
  {
    path: "/pofile",
    name: "pofile",
    
    component: () =>
      import("../views/pofile.vue"),
  },
  {
    path: "/trips",
    name: "trips",
    
    component: () =>
      import("../views/trips.vue"),
  },
  {
    path: "/shipment",
    name: "shipment",
    
    component: () =>
      import("../views/shipment.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: () =>
    import("../views/error.vue"),  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
