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
        ><router-link class="white--text mr-5 text" to="/Login">
          Log in</router-link
        >
      </v-btn>
    </v-app-bar>
    <v-container class="fill-height mt-9">
      <v-form ref="form">
        <v-row align="center justify-center">
          <v-col cols="12" sm="8" md="6" lg="8">
            <v-card>
              <v-container class="color bg-color">
                <h1 class="text-center">Join Pexels</h1>
                <h5 class="text-center grey--text">
                  Let's create your account
                </h5>
                <v-container class="ml-8">
                  <v-row>
                    <v-col cols="5">
                      <v-text-field
                        background-color="rgb(245,245,245)"
                        type="text"
                        solo
                        label="Name"
                        :rules="nameRules"
                        v-model="signUpData.name"
                        prepend-inner-icon="mdi-account"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field
                        background-color="rgb(245,245,245)"
                        type="email"
                        solo
                        label="Email"
                        :rules="emailRules"
                        prepend-inner-icon="mdi-email"
                        v-model="signUpData.email"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="5">
                      <v-text-field
                        :type="passwordShow ? 'text' : 'password'"
                        :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="passwordShow = !passwordShow"
                        background-color="rgb(245,245,245)"
                        solo
                        label="Password"
                        prepend-inner-icon="mdi-lock"
                        :rules="passwordRules"
                        v-model="signUpData.password"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field
                        :type="confirmPasswordShow ? 'text' : 'password'"
                        :append-icon="
                          confirmPasswordShow ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        @click:append="
                          confirmPasswordShow = !confirmPasswordShow
                        "
                        background-color="rgb(245,245,245)"
                        solo
                        label=" Confirm Password"
                        prepend-inner-icon="mdi-lock"
                        :rules="passwordRules"
                        v-model="signUpData.password_confirmation"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="5">
                      <v-file-input
                        background-color="rgb(245,245,245)"
                        prepend-icon="mdi-camera"
                        :v-model="signUpData.profile_picture"
                        label="Profile picture"
                        solo
                        @change="getProfilePicture"
                        required
                      >
                      </v-file-input>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field
                        background-color="rgb(245,245,245)"
                        type="number"
                        solo
                        label="Age"
                        :rules="ageRules"
                        prepend-inner-icon="mdi-counter"
                        v-model="signUpData.age"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="7">
                      <v-btn
                        height="40"
                        class="text-center white--text btnMargin"
                        block
                        color="rgb(0,165,129)"
                        @click="storeData"
                        >Sign up</v-btn
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
                </v-container>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" md="6" lg="4">
            <v-card elevation="19" class="color" height="548 ">
              <v-img :src="imageLogo" height="548" />
            </v-card>
          </v-col>
        </v-row>
      </v-form>
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
//import axios from "axios";
import { mapGetters } from "vuex";
import {
  emailRules,
  nameRules,
  ageRules,
  passwordRules,
  imageRules,
} from "@/constants/Constants.js";

export default {
  name: "Signup",

  data() {
    return {
      imageLogo: require("@/assets/images/pexels.png"),
      image: require("@/assets/images/pexels-white.png"),
      passwordShow: false,
      confirmPasswordShow: false,

      //data properties for Regex
      emailRules: emailRules,
      nameRules: nameRules,
      passwordRules: passwordRules,
      ageRules: ageRules,
      imageRules: imageRules,

      //data properties for 2 way binding
      signUpData: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        age: "",
        profile_picture: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getSnackbarStutes"]),
    ...mapGetters(["getSnackbarErrorMsg"]),
  },
  methods: {
    async storeData() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateSnackbarStatus");
        this.$store.dispatch("Signup", this.signUpData);

        this.$router.push({ name: "Login" });
      } else {
        this.$alert("Error");
      }
    },
    getProfilePicture(event) {
      console.log(event);

      let get = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          get.signUpData.profile_picture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
  },
};
</script>
<style scoped>
.margin {
  margin-left: 24%;
}
.avatarMargin {
  margin-left: 38%;
}
.btnMargin {
  margin-left: 20%;
}
.color {
  box-shadow: 0px 1px 4px 0px;
  border-radius: 10px;
}
.bg-color {
  background-color: rgb(250, 250, 250);
}
</style>
