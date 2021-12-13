<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      image: require("@/assets/images/pexels-white.png"),
    };
  },
};
</script>
