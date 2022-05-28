import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";

const routes = [
  {
    path: "/",
    name: "Homepage - guest",
    component: Index,
  },
  {
    path: "/list",
    name: "Lista dostępnych bajek",
    component: () => import("../views/List.vue"),
  },
  {
    path: "/login",
    name: "Login page",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register page",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/admin",
    name: "Admin panel",
    component: () => import("../views/admin/Index.vue"),
    children: [
      {
        path: 'users',
        component: () => import("../views/admin/Users.vue"),
      },
      {
        path: 'series',
        component: () => import("../views/admin/series/Series.vue")
      },
      {
        path: "series/add",
        name: "Add series",
        component: () => import("../views/admin/series/add.vue")
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "button--active",
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
});

export default router;
