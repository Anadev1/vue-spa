<template>
  <div class="form-container">
    <h1>Add a song to the list</h1>
    <form>
      <input type="text" v-model="song.title" placeholder="title" required />
      <input type="text" v-model="song.artist" placeholder="artist" required />
      <input type="text" v-model="song.genre" placeholder="genre" required />
      <input type="text" v-model="song.spotify" placeholder="spotify link" />
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
      <button type="button" v-on:click="addSong" id="add-btn">Add Song</button>
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
        spotify: ''
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

<style scoped>
input {
  display: block;
  margin: auto;
  width: 90%;
  height: 6vh;
  border-bottom: 1px #2e303f solid;
  border-top: none;
  border-left: none;
  border-right: none;
}
form :nth-child(5) {
  display: none;
}

.choose-image {
  margin-top: 3vh;
  width: 90%;
  height: 4vh;
  background-color: #2e303f;
  color: #fafafa;
  border: none;
  border-radius: 3px;
}

#add-btn {
  width: 40vw;
  height: 6vh;
  background-color: #63948c;
  color: #fafafa;
  border: none;
  border-radius: 3px;
}
</style>
