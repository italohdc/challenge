<template>
  <div class="card">
    <div class="card-content">
      <b-loading :is-full-page="false" :active="true" :can-cancel="false"></b-loading>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingMusicCard',
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
  height: 70px;
}

.card-content {
  padding: 0.5rem;
}
</style>
