<template >
  <v-app>
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
      <router-link class="white--text text" to="/Signup">
        <v-btn color="rgb(0,165,129)" class="white--text mr-5" @click="logOut">
          <v-icon class="white--text">mdi-logout</v-icon> Sign Up
        </v-btn></router-link
      >
      <router-link class="white--text mr-5 text" to="/Login">
        <v-btn
          color="rgb(0,165,129)"
          @click="sheet = !sheet"
          class="white--text mr-3"
          ><v-icon class="white-text">mdi-logout</v-icon> Log In
        </v-btn></router-link
      >
    </v-app-bar>
    <div>
      <v-carousel hide-delimiters height="290" full-screen>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div class="text-center container-fluid mt-1">
      <h4 class="mt-4">Ready to Discover Pexels?</h4>
      <div class="text-center">
        <router-link class="white--text mr-2 text" to="/Signup"
          ><v-chip class="ma-2" color="rgb(0,165,129)" label text-color="white">
            <v-icon left> mdi-label </v-icon>
            Lets Get Started
          </v-chip>
        </router-link>
      </div>
    </div>
    <v-divider></v-divider>

    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(product, i) in products">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="product.img" height="225px">
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-left">
                        {{ product.title }}
                      </p>

                      <div>
                        <p
                          class="
                            ma-0
                            text-body-1
                            font-weight-bold font-italic
                            text-left
                          "
                        >
                          {{ product.text }}
                        </p>
                        <p
                          class="
                            text-caption
                            font-weight-medium font-italic
                            text-left
                          "
                        >
                          {{ product.subtext }}
                        </p>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <div class="text-center">
      <v-chip class="ma-2" label> Label </v-chip>

      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon left> mdi-label </v-icon>
        Tags
      </v-chip>

      <v-chip class="ma-2" color="primary" label>
        <v-icon left> mdi-account-circle-outline </v-icon>
        John Leider
      </v-chip>

      <v-chip class="ma-2" close color="cyan" label text-color="white">
        <v-icon left> mdi-twitter </v-icon>
        New Tweets
      </v-chip>
    </div>
    <v-divider></v-divider>
    <v-footer color="rgb(0, 165, 129)" padless>
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
          {{ new Date().getFullYear() }} — <strong>Pexels</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data() {
    return {
      image: require("@/assets/images/pexels-white.png"),
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
      ],
      products: [
        {
          title: "Nature",
          text: `Discover Nature`,
          subtext: "Newly released songs. Updated daily.",
          img: "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/videos/term-bg-6-146d8d4d1c5ccd9bce7d32cc67353619.jpg",
        },
        {
          title: "Professional",
          text: "Lose yourself in reality",
          subtext: "Lose yourself in rock tunes.",
          img: "https://www.gettyimages.com/gi-resources/images/500px/983801190.jpg",
        },
        {
          title: "Photography",
          text: "Happy Faces",
          subtext: "Chill beats to mellow you out.",
          img: "https://www.w3schools.com/howto/img_forest.jpg",
        },
        {
          title: "Nature",
          text: `Discover Nature`,
          subtext: "Newly released songs. Updated daily.",
          img: "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
        },
        {
          title: "Nature",
          text: `Discover Nature`,
          subtext: "Newly released songs. Updated daily.",
          img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
        },
        {
          title: "Nature",
          text: `Discover Nature`,
          subtext: "Newly released songs. Updated daily.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhbV5GDULb5c2kb28N9VfNs2XBN8anTG1Rw&usqp=CAU",
        },
        {
          title: "Nature",
          text: `Discover Nature`,
          subtext: "Newly released songs. Updated daily.",
          img: "https://i.pinimg.com/736x/94/ac/bb/94acbbb2c2a09130d1c6a8a8db8efcb3.jpg",
        },
        {
          title: "Nature",
          text: `Discover Nature`,
          subtext: "Newly released songs. Updated daily.",
          img: "https://assets.hongkiat.com/uploads/beautiful-mosque/Siddiqa_Fatima_Zahra_Mosque_Kuwait.jpg",
        },
        {
          title: "Nature",
          text: `Discover Nature`,
          subtext: "Newly released songs. Updated daily.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wLW5rnOhR7qv_SLAXWaVNN-x2yPvm4bHNg&usqp=CAU",
        },
      ],
    };
  },
};
</script>
<style scoped>
.dcolor {
  background-color: rgb(231, 234, 237);
}
.btnColor {
  color: rgb(0, 165, 129);
}
</style>