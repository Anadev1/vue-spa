<template>
  <div class="details">
    <h1>Details</h1>
    <img :src="song.image" alt="" />
    <h1>{{ song.title }}</h1>
    <h2>{{ song.artist }}</h2>
    <h3>{{ song.genre }}</h3>
    <a :href="song.spotify" v-if="song.spotify">Open in Spotify </a>
    <button type="delete" v-on:click="deleteSong(song.id)" id="delete-btn">
      Delete
    </button>
  </div>
</template>

<script>
import { songRef } from "../firebase-db";
export default {
name: "Details",
   props: {
    song: Object
  },
  methods: {
    deleteSong(el) {
      songRef.doc(el).delete()
      this.$router.push('/')
    }
  }
};
</script>

<style>
img {
  max-width: 300px;
  width: 100%;
}
#delete-btn {
  width: 75px;
  height: 4vh;
  background-color: #c24332;
  color: #fafafa;
  border: none;
  border-radius: 3px;
  font-family: "Montserrat", sans-serif;
}
a {
  display: block;
  color: #2e303f;
  margin-bottom: 2vh;
}
</style>