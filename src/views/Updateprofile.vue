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
      <v-row align="center justify-center">
        <v-col cols="12" sm="12" md="12" lg="9">
          <v-card>
            <v-container>
              <h1 class="text-center">Update Your Profile</h1>
              <v-container class="ml-8 mt-7">
                <v-row>
                  <v-col>
                    <v-list-item-avatar size="75" class="background-color">
                      <v-img
                        contain
                        :src="updatedData.profile_picture"
                        @change="captureImage"
                        alt="image"
                      />
                    </v-list-item-avatar>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="5">
                    <v-text-field
                      background-color="rgb(250,250,250)"
                      type="text"
                      solo
                      label="Name"
                      prepend-inner-icon="mdi-account"
                      v-model="updatedData.name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                      background-color="rgb(250,250,250)"
                      type="email"
                      solo
                      label="Email"
                      prepend-inner-icon="mdi-email"
                      v-model="updatedData.email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-text-field
                      background-color="rgb(250,250,250)"
                      type="number"
                      solo
                      label="Age"
                      v-model="updatedData.age"
                      prepend-inner-icon="mdi-counter"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="10">
                    <v-file-input
                      background-color="rgb(245,245,245)"
                      prepend-icon="mdi-camera"
                      :v-model="updatedData.profile_picture"
                      label="Profile picture"
                      solo
                      @change="captureImage"
                      required
                    >
                    </v-file-input>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="7">
                    <v-btn
                      height="40"
                      class="text-center btnMargin"
                      block
                      color="rgb(0,165,129)"
                      @click.prevent="update_profile"
                      >Update</v-btn
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
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      image: require("@/assets/images/pexels-white.png"),

      updatedData: {
        name: "",
        email: "",
        age: "",
        profile_picture: "",
      },
      user_profile: [],
    };
  },
  mounted() {
    this.$store.dispatch("Profile_updation");
    this.user_profile = JSON.parse(localStorage.getItem("userProfile"));
    this.updatedData.name = this.user_profile.name;
    this.updatedData.email = this.user_profile.email;
    this.updatedData.age = this.user_profile.age;

    this.updatedData.profile_picture = this.user_profile.profile_picture;
  },
  methods: {
    captureImage(event) {
      console.log(event);

      let get = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          get.updatedData.profile_picture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
    update_profile() {
      this.$store.dispatch("updateProfile", this.updatedData);
      localStorage.setItem("update_Profile", JSON.stringify(this.updatedData));
      this.$alert("Your profile has been Updated successfully");
    },
  },
};
</script>
<style scoped>
.margin {
  margin-left: 24%;
}
.avatarMargin {
  margin-left: 44%;
}
.btnMargin {
  margin-left: 20%;
}
.background-color {
  background-color: rgb(0, 165, 129);
  margin-left: 36%;
}
</style>
