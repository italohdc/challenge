<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6">{{ music.name }}</p>
          <p class="subtitle is-7">{{ music.artists }}</p>
        </div>
        <b-button
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
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
}

.card-content {
  padding: 0.5rem;
}
</style>
