import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Store from "../views/store.vue";
import clothes from "../views/Clothes.vue";
import Cart from "../views/cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/store",
    name: "Store",
    component: Store,
  },
  {
    path: "/clothes",
    name: "clothes",
    component: clothes,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
