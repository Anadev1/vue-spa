<template>
  <div class="edit">
    <h1>Edit a song</h1>
    <form>
      <input type="text" v-model="song.title" placeholder="title" required />
      <input type="text" v-model="song.artist" placeholder="artist" required />
      <input type="text" v-model="song.genre" placeholder="genre" required />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Choose image
      </button>
      <div>
        <img :src="song.image" class="image-preview" />
      </div>
      <button type="button" v-on:click="editSong">Edit Song</button>
    </form>
  </div>
</template>

<script>
import { songRef } from '../firebase-db'
export default {
  name: "Edit",
  props: {
    song: Object
  },
  methods: {
    triggerChooseImg () {
      this.$refs.fileInput.click()
    },
    previewImage () {
      const imageFile = this.$refs.fileInput.files[0]
      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.song.image = event.target.result
      }
      fileReader.readAsDataURL(imageFile)
    },
    editSong () {
      console.log(this.song);
      songRef.doc(this.song.id).set({
        title: this.song.title,
        artist: this.song.artist,
        genre: this.song.genre,
        image: this.song.image
      });
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
input {
  display: block;
  margin: auto;
}
form :nth-child(4) {
  display: none;
}
</style>
