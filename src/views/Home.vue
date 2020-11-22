<template>
  <div class="home">
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
