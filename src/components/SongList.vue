<template>
  <div class="grid-container">
    <article v-for="song in songs" :key="song.id">
      <img :src="song.image" alt="" />
      <h1>{{ song.title }}</h1>
      <h2>{{ song.artist }}</h2>
      <h3>{{ song.genre }}</h3>
      <router-link :to="{ name: 'Edit', params: { song: song } }">
        <button>Edit</button>
      </router-link>
      <button type="button" v-on:click="deleteSong(song.id)">Delete</button>
    </article>
  </div>
</template>

<script>
import { songRef } from "../firebase-db";
export default {
name: "SongList",
  data() {
    return {
     songs: []
    };
  },
  firestore() {
     return {
      songs: songRef
     };
  }, 
  methods: {
    deleteSong(el) {
      songRef.doc(el).delete()
    }
  }
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
}
@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}
@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}
.grid-container article {
  text-align: center;
  padding: 10px;
}
.grid-container img {
  max-width: 300px;
  width: 100%;
}
.grid-container h3 {
  font-weight: 200;
  margin: 0 0 1.5em;
}
</style>
