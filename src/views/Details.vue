<template>
  <div class="details">
    <h1>Details</h1>
    <img :src="song.image" alt="" />
    <h1>{{ song.title }}</h1>
    <h2>{{ song.artist }}</h2>
    <h3>{{ song.genre }}</h3>
    <button type="delete" v-on:click="deleteSong(song.id)">Delete</button>
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
</style>