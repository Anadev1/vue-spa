<template>
  <div>
    <h1>Add a song to the list</h1>
    <form>
      <input type="text" v-model="song.title" placeholder="title" required />
      <input type="text" v-model="song.artist" placeholder="artist" required />
      <input type="text" v-model="song.genre" placeholder="genre" required />
      <!-- <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Choose image
      </button> -->
      <!-- <div>
        <img :src="song.image" class="image-preview" />
      </div> -->
      <button type="button" v-on:click="addSong">Add Song</button>
    </form>
  </div>
</template>

<script>
import { songRef } from '../firebase-db'
export default {
  name: 'Add',
  data () {
    return {
      song: {
        title: '',
        artist: '',
        genre: '',
        image: null,
      }
    }
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
    addSong () {
      songRef.add(this.song)
      this.$router.push('/')
    }
  }
};
</script>


