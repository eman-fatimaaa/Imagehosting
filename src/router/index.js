import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Forgetpassword from "../views/Forgetpassword.vue";
import Updateprofile from "../views/Updateprofile.vue";
import OTP from "../views/OTP.vue";
import Resetpassword from "../views/Resetpassword.vue";
import ImageUpload from "../components/ImageUpload.vue";
import Gallery from "../components/Gallery.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",

    component: Login,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Forgetpassword",
    name: "Forgetpassword",
    component: Forgetpassword,
  },
  {
    path: "/Updateprofile",
    name: "Updateprofile",
    component: Updateprofile,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next(false);
      }
      else {
        next();
      }
    }
  },
  {
    path: "/OTP",
    name: "OTP",
    component: OTP,
  },
  {
    path: "/Resetpassword",
    name: "Resetpassword",
    component: Resetpassword,
  },
  {
    path: "/imageupload",
    name: "imageupload",
    component: ImageUpload,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
