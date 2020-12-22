import Vue from "vue";
import VueRouter from "vue-router";
import firebase from 'firebase'
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Signout from "../views/Signout.vue";
import NewsView from "../views/NewsView.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signout",
    name: "Signout",
    component: Signout,
  },
  {
    path: "/news/:newsId",
    name: "NewsView",
    component: NewsView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(recode => recode.meta.requiresAuth);
  console.log(requiresAuth)
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    next({ path: "/signin" });
  } else {
    next();
  }
});

export default router;
