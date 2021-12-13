<template>
  <div class="container">
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
    <div>Verify OTP</div>
    <v-form ref="form">
      <v-text-field
        background-color="rgb(245,245,245)"
        type="number"
        solo
        label="Number"
        prepend-inner-icon="mdi-counter"
        v-model="number"
      ></v-text-field>
      <v-btn @click="getOTP">Verify</v-btn>
    </v-form>
  </div>
</template>
<script>
//import axios from "axios";
export default {
  data() {
    return {
      image: require("@/assets/images/pexels-white.png"),
      number: "",
    };
  },
  methods: {
    getOTP() {
      this.$store.dispatch("get_otp", this.number);
      this.$router.push({ name: "Resetpassword" });
    },
  },
};
</script>
<style scoped>
</style>