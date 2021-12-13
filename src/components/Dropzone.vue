<template>
  <div class="container">
    <v-btn @click="upload"> Upload</v-btn>
    <vue-dropzone
      :options="dropzoneOptions"
      :useCustomSlot="true"
      v-on:vdropzone-sending="sendingEvent"
    >
      <div class="dropzone-custom-content">
        <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
        <div class="subtitle">
          ...or click to select a file from your computer
        </div>
      </div>
    </vue-dropzone>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  components: {
    vueDropzone: vue2Dropzone,
  },

  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 200,
        addRemoveLinks: true,
      },
    };
  },
  methods: {
    sendingEvent(file, xhr, formData) {
      formData.append("paramName", "some value or other");
    },
    afterUploadComplete: async function (response) {
      if (response.status == "success") {
        console.log("upload successfull");
      } else {
        console.log("upload failed");
      }
    },
    upload() {
      console.log(this.dropzoneOptions);
      this.$store.dispatch("uploadImages", this.dropzoneOptions);
    },
  },
};
</script>
<style scoped>
.dropZone {
  border: 1px dashed blue;
  background-color: rgb(0, 165, 129);
  border: 1px dashed rgb(0, 165, 129);
}
</style>
