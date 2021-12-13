<template>
  <div class="container">
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

      <v-btn
        color="rgb(0,165,129)"
        @click="sheet = !sheet"
        class="white--text mr-5"
        ><v-icon class="white-text">mdi-cloud-upload</v-icon> Upload
      </v-btn>
      <div class="dropdown">
        <button
          class="btn btnColor dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Your Account
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#"
            ><router-link class="black--text mr-5 text" to="/Updateprofile">
              Update your profile?</router-link
            ></a
          >
          <a class="dropdown-item" href="#"
            ><router-link class="black--text mr-5 text" to="/Forgetpassword">
              Update Password</router-link
            ></a
          >
          <a class="dropdown-item" href="#"
            ><router-link class="black--text mr-5 text" to="/Login">
              Log in</router-link
            ></a
          >
        </div>
      </div>
    </v-app-bar>

    <Dropzone />
    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-bottom-sheet v-model="sheet">
        <v-sheet class="text-center" height="290px">
          <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
            close
          </v-btn>
          <div class="py-3">
            <Dropzone />
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </div>

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
          {{ new Date().getFullYear() }} — <strong>Pexels</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
//import axios from "axios";
import Dropzone from "../components/Dropzone.vue";
export default {
  components: {
    Dropzone,
  },
  data: () => ({
    image: require("@/assets/images/pexels-white.png"),
    sheet: false,
    isDragging: false,
    dragCount: 0,
    files: [],
    images: [],
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    products: ["web", "shopping", "videos", "images", "news"],
    imageobject: {
      fileName: "",
      fileURL: "",
    },
  }),
  methods: {
    // OnDragEnter(e) {
    //   e.preventDefault();

    //   this.dragCount++;
    //   this.isDragging = true;

    //   return false;
    // },
    // OnDragLeave(e) {
    //   e.preventDefault();
    //   this.dragCount--;

    //   if (this.dragCount <= 0) this.isDragging = false;
    // },
    // onInputChange(e) {
    //   const files = e.target.files;

    //   Array.from(files).forEach((file) => this.addImage(file));
    // },
    // onDrop(e) {
    //   e.preventDefault();
    //   e.stopPropagation();

    //   this.isDragging = false;

    //   const files = e.dataTransfer.files;

    //   Array.from(files).forEach((file) => this.addImage(file));
    // },
    // addImage(file) {
    //   if (!file.type.match("image.*")) {
    //     this.$toastr.e(`${file.name} is not an image`);
    //     return;
    //   }

    //   this.files.push(file);

    //   const img = new Image();
    //   const reader = new FileReader();
    //   console.log(img);
    //   //const that = this;
    //   reader.onload = (e) => {
    //     this.imageobject.fileName = file.name;
    //     this.imageobject.fileURL = e.target.result;
    //     this.images.push(this.imageobject);
    //     console.log(this.images);
    //   };

    //   // reader.onload = (e) => this.images.push(e.target.result);

    //   reader.readAsDataURL(file);
    // },
    // getFileSize(size) {
    //   const fSExt = ["Bytes", "KB", "MB", "GB"];
    //   let i = 0;

    //   while (size > 900) {
    //     size /= 1024;
    //     i++;
    //   }

    //   return `${Math.round(size * 100) / 100} ${fSExt[i]}`;
    // },
    upload() {
      console.log(this.images[0]);
      this.$store.dispatch("List_All_Images", this.images[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
.uploader {
  width: 100%;
  background: rgb(0, 165, 129);
  color: #fff;
  padding: 40px 15px;
  text-align: center;
  border-radius: 10px;
  border: 3px dashed #fff;
  font-size: 20px;
  position: relative;

  &.dragging {
    background: #fff;
    color: #2196f3;
    border: 3px dashed #2196f3;

    .file-input label {
      background: rgb(0, 165, 129);
      color: #fff;
    }
  }

  i {
    font-size: 85px;
  }

  .file-input {
    width: 200px;
    margin: auto;
    height: 68px;
    position: relative;

    label,
    input {
      background: #fff;
      color: rgb(0, 165, 129);
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      padding: 10px;
      border-radius: 4px;
      margin-top: 7px;
      cursor: pointer;
    }

    input {
      opacity: 0;
      z-index: -2;
    }
  }
  .color {
    color: white;
  }

  .images-preview {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .img-wrapper {
      width: 160px;
      display: flex;
      flex-direction: column;
      margin: 10px;
      height: 150px;
      justify-content: space-between;
      background: #fff;
      box-shadow: 5px 5px 20px #3e3737;

      img {
        max-height: 105px;
      }
    }

    .details {
      font-size: 12px;
      background: #fff;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: self-start;
      padding: 3px 6px;

      .name {
        overflow: hidden;
        height: 18px;
      }
    }
  }

  .upload-control {
    position: absolute;
    width: 100%;
    background: #fff;
    top: 0;
    left: 0;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 10px;
    padding-bottom: 4px;
    text-align: right;

    button,
    label {
      background: white;
      background: rgb(0, 165, 129);
      border-radius: 3px;
      color: rgb(0, 165, 129);
      font-size: 15px;
      cursor: pointer;
    }

    label {
      padding: 2px 5px;
      margin-right: 10px;
    }
  }
}
.btnColor {
  background-color: rgb(0, 165, 129);
  color: white;
}
.color {
  background-color: rgb(244, 244, 245);
}
.border-radius {
  border-radius: 5px;
  color: pink !important;
  padding: 3px;
}
.width {
  width: 60%;
}
</style>