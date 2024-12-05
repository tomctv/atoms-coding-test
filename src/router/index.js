import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/articoli",
    },
    {
      path: "/articoli",
      name: "articoli",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "articoli" && !to.query.category) {
    // Add parameter "category=all" if not present
    next({
      name: to.name,
      query: { ...to.query, category: "all" },
    });
  } else {
    next();
  }
});

export default router;
