<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <span class="position-circle">{{ index + 1 }}</span>
        <div class="media-content">
          <p class="title is-6">{{ music.name }}</p>
          <p class="subtitle is-7">{{ music.artists }}</p>
        </div>
        <b-button
          v-if="!hideDelete"
          icon-left="close"
          type="is-danger"
          outlined
          rounded
          @click="$emit('delete', $event)"
        >
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicCard',
  props: {
    music: Object,
    index: Number,
    hideDelete: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.card-content {
  padding: 0.5rem;
}

.position-circle {
  font-size: 1.1rem;
  font-weight: bold;
  background-color: #d1d1d1;
  padding: 0.3rem 0.8rem;
  margin-right: 0.4rem;
  border-radius: 200px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 0.8rem;
}
</style>
