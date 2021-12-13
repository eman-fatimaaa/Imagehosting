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
        <span class="mr-2">Already using pexels?</span>
        <v-icon>mdi-open-in-new</v-icon
        ><router-link class="white--text mr-5 text" to="/Updateprofile">
          Update profile</router-link
        >
      </v-btn>
    </v-app-bar>
    <div class="container">
      <v-container class="fill-height mt-16">
        <v-row align="center justify-center">
          <v-col cols="12" sm="6" md="6" lg="8">
            <v-card>
              <v-container>
                <h1 class="text-center">Reset password</h1>
                <v-container class="ml-8">
                  <v-form ref="form">
                    <v-row>
                      <v-col cols="10">
                        <v-text-field
                          background-color="rgb(250,250,250)"
                          prepend-inner-icon="mdi-email"
                          solo
                          label="Enter your password"
                          v-model="updatePassword.password"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="10">
                        <v-text-field
                          background-color="rgb(250,250,250)"
                          prepend-inner-icon="mdi-email"
                          solo
                          label="confimrPassword"
                          v-model="updatePassword.confimrPassword"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="7">
                        <v-btn
                          height="40"
                          class="text-center btnMargin"
                          block
                          color="rgb(0,165,129)"
                          @click="Submit"
                          >Submit</v-btn
                        ></v-col
                      >
                    </v-row>
                    <v-row>
                      <v-col cols="10">
                        <p class="text-center font-size" mt-3>
                          By joining you agree to our
                          <a href="https://www.pexels.com/terms-of-service/"
                            >Terms of service</a
                          >
                          and
                          <a href="https://www.pexels.com/privacy-policy/"
                            >Privacy policy</a
                          >
                        </p>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
//import axios from "axios";
import { emailRules } from "@/constants/Constants.js";
export default {
  name: "App",

  data() {
    return {
      image: require("@/assets/images/pexels-white.png"),
      emailRules: emailRules,
      updatePassword: {
        confirmPassword: "",
        password: "",
      },
    };
  },
  methods: {
    Submit() {
      this.$store.dispatch("Password_updation", this.updatePassword);
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style scoped>
.btnMargin {
  margin-left: 15%;
}
</style>
