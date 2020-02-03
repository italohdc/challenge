<template>
  <div class="music-list-container">
    <music-card
      v-for="(music, index) in musics"
      :key="music.id"
      :music="music"
      :index="index"
      class="music-card"
      @delete="deleteItem(index)"
    />
  </div>
</template>

<script>
import MusicCard from '../molecules/MusicCard.vue';

export default {
  name: 'MusicList',
  props: {
    musics: Array,
  },
  components: {
    MusicCard,
  },
  methods: {
    deleteItem(index) {
      this.$emit('delete', index);
    },
  },
};
</script>

<style lang="scss" scoped>
.music-list-container {
  max-height: 400px;
  overflow-y: auto;
  border-radius: 5px;
  margin-bottom: 0.8rem;
}

.music-card {
  margin: 1rem 0.1rem;
}
</style>
