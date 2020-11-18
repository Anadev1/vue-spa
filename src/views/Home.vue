<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <song-list></song-list>
  </div>
</template>

<script>
import SongList from '../components/SongList.vue';

export default {
  name: "Home",
  components: {
    SongList
  }
};
</script>
