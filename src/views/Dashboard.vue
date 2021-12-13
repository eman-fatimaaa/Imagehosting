<template>
  <div>
    <v-app-bar app color="black">
      <div class="d-flex align-center width">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="image"
          transition="scale-transition"
          width="150"
        />
        <v-text-field
          label="SEARCH FOR FREE PHOTOS"
          rounded
          dense
          class="color border-radius pa-0 pt-1 pb-0"
        ></v-text-field>
      </div>

      <v-spacer></v-spacer>
      <v-btn color="rgb(0,165,129)" class="white--text" @click="logOut"
        ><v-icon class="white--text">mdi-logout</v-icon> Logout
      </v-btn>
      <v-btn color="rgb(0,165,129)" @click="sheet = !sheet" class="white--text"
        ><v-icon class="white-text">mdi-cloud-upload</v-icon> Upload
      </v-btn>
    </v-app-bar>
    <div>
      <v-carousel hide-delimiters height="395" full-screen>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <v-container class="fill-height mt-9">
      <v-row align="center justify-center">
        <v-col cols="12" sm="6" md="6" lg="8">
          <div class="container">
            <v-container>
              <v-btn color="rgb(0,165,129)" class="white--text carouselMargin">
                <v-icon>mdi-open-in-new</v-icon
                ><router-link class="white--text text" to="/imageupload">
                  Start Uploading Your Images Here</router-link
                >
              </v-btn>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-footer app color="rgb(0, 165, 129)" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col
          class="py-4 text-center white--text"
          color="rgb(0, 165, 129)"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    afterUploadComplete: async function (response) {
      if (response.status == "success") {
        console.log("upload successfull");
      } else {
        console.log("upload failed");
      }
    },

    logOut() {
      this.$store.dispatch("logOut");
      localStorage.removeItem("Token");
      this.$router.push({ name: "Login" });
    },
  },

  data() {
    return {
      image: require("@/assets/images/pexels-white.png"),
      sheet: false,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 2,
        headers: { "My-Awesome-Header": "header value" },
      },
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
.color {
  background-color: rgb(244, 244, 245);
}
.btnColor {
  background-color: black;
}
.border-radius {
  border-radius: 5px;
  color: pink !important;
  padding: 3px;
}
.width {
  width: 60%;
}
.bg {
  background-color: white;
  width: 1%;
}
.dropZone {
  border: 1px dashed green;
}
.carouselMargin {
  margin-left: 30%;
}
</style>