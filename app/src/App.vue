<template>
  <div id="app">
    <div class="columns">
      <div class="column is-three-quarters">
        <router-view/>
      </div>
      <div class="column">
        <references />
      </div>
    </div>
  </div>
</template>

<script>
import References from './components/organisms/References.vue';

export default {
  components: {
    References,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f0f0f0;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
