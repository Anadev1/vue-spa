<template>
  <section>
    <input
      type="text"
      v-model="search"
      placeholder="Search song.."
      id="search-bar"
    />
    <div class="grid-container">
      <article v-for="song in filteredSongs" :key="song.id">
        <img :src="song.image" alt="" />
        <h1>{{ song.title }}</h1>
        <h2>{{ song.artist }}</h2>
        <h3>{{ song.genre }}</h3>
        <a :href="song.spotify" v-if="song.spotify">Open in Spotify </a>
        <div id="buttons">
          <router-link :to="{ name: 'Edit', params: { song: song } }">
            <button id="edit-btn">Edit</button>
          </router-link>
          <router-link :to="{ name: 'Details', params: { song: song } }">
            <button id="details-btn">Details</button>
          </router-link>
          <button
            type="delete"
            v-on:click="deleteSong(song.id)"
            id="delete-btn"
          >
            Delete
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { songRef } from "../firebase-db";
export default {
name: "SongList",
  data() {
    return {
      search: '',
      songs: []
    };
  },
  firestore() {
     return {
      songs: songRef
     }
  }, 
  methods: {
    deleteSong(el) {
      songRef.doc(el).delete()
    }
  },
  computed: {
    filteredSongs() {
      return this.songs.filter(song => {
        return song.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
};
</script>

<style scoped>
section {
  max-width: 100%;
  margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
  max-width: 100%;
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
  margin-bottom: 5vh;
  border-bottom: 1px solid #2e303f;
}
.grid-container img {
  max-width: 300px;
  width: 100%;
}
.grid-container h3 {
  font-weight: 200;
  margin: 0 0 1.5em;
}

#search-bar {
  margin-top: 1vh;
  width: 100%;
  height: 6vh;
  border-bottom: 1px #2e303f solid;
  border-top: none;
  border-left: none;
  border-right: none;
}

a {
  display: block;
  color: #2e303f;
}

h1 {
  font-size: 1.7em;
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1em;
}

#buttons {
  display: flex;
  margin: 3vh auto 3vh;
  justify-content: space-between;
  width: 80vw;
}

#edit-btn {
  width: 20vw;
  height: 4vh;
  background-color: #2e303f;
  color: #fafafa;
  border: none;
  border-radius: 3px;
}

#details-btn {
  width: 20vw;
  height: 4vh;
  background-color: #2e303f;
  color: #fafafa;
  border: none;
  border-radius: 3px;
}

#delete-btn {
  width: 20vw;
  height: 4vh;
  background-color: #c24332;
  color: #fafafa;
  border: none;
  border-radius: 3px;
}
</style>
