<template>
  <div>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="image"
          transition="scale-transition"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn>
        <span class="mr-2">New to Pexels?</span>
        <v-icon>mdi-open-in-new</v-icon
        ><router-link class="white--text mr-5 text" to="/Signup">
          Sign up</router-link
        >
      </v-btn>
    </v-app-bar>
    <v-container class="fill-height mt-16">
      <v-row align="center justify-center">
        <v-col cols="12" sm="6" md="6" lg="8">
          <v-card class="color" elevation="10"
            ><v-container class="ml-11">
              <v-row>
                <v-col cols="10">
                  <h2 class="mb-10 text-center">Welcome Back To Pexels</h2>
                </v-col>
              </v-row>
              <v-form ref="form">
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      background-color="rgb(250,250,250)"
                      type="email"
                      solo
                      :rules="emailRules"
                      label="Email"
                      v-model="loginData.email"
                      prepend-inner-icon="mdi-email"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      :type="passwordShow ? 'text' : 'password'"
                      :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      background-color="rgb(250,250,250)"
                      solo
                      label="Password"
                      :rules="passwordRules"
                      v-model="loginData.password"
                      prepend-inner-icon="mdi-lock"
                    ></v-text-field
                  ></v-col>
                </v-row>

                <v-row>
                  <v-col cols="7">
                    <v-btn
                      height="40"
                      class="text-center ml-14"
                      block
                      color="rgb(0,165,129)"
                      @click="logIn"
                      >Log in</v-btn
                    ></v-col
                  >
                </v-row>
              </v-form>
              <div class="container">
                <p class="margin mt-3">
                  <router-link
                    class="black--text mr-5 text"
                    to="/Forgetpassword"
                  >
                    Forgot Password?</router-link
                  >
                </p>
                <p class="margin mt-3"></p></div
            ></v-container>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-card outlined height="440 " elevation="11">
            <v-img :src="imageLogo" height="440" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar
      top
      color="rgb(0,165,129)"
      :value="getSnackbarStutes"
      timeout="3000"
    >
      {{ getSnackbarErrorMsg }}
    </v-snackbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import { emailRules, passwordRules } from "@/constants/Constants.js";
export default {
  name: "App",

  data() {
    return {
      image: require("@/assets/images/pexels-white.png"),
      imageLogo: require("@/assets/images/pexels.jpeg"),
      passwordShow: false,

      emailRules: emailRules,
      passwordRules: passwordRules,
      loginData: {
        password: "",
        email: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getSnackbarStutes"]),
    ...mapGetters(["getSnackbarErrorMsg"]),
  },
  methods: {
    async logIn() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateSnackbarStatus");
        this.$store.dispatch("Login", this.loginData);
        (this.$store.state.authenticated = true),
          this.$router.push({ name: "Dashboard" });
      }
    },
  },
};
</script>
<style scoped>
.margin {
  margin-left: 28%;
}
.color {
  box-shadow: 0px 1px 4px 0px;
  border-radius: 10px;
}
</style>
