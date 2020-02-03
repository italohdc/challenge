<template>
  <b-menu class="references-menu">
    <b-menu-list label="References">
      <b-menu-item
        v-for="(link, index) in links"
        :key="index"
        :href="link.url"
      >
        <template slot="label">
          <h1 class="reference-title">{{ link.title }}</h1>
          <p class="reference-subtitle">{{ link.subtitle }}</p>
        </template>
      </b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  name: 'References',
  data() {
    return {
      links: [
        {
          url: 'https://google.com',
          title: 'A page that explains something',
          subtitle: 'Google',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.references-menu {
  padding: 2rem;
}

.reference-title {
  font-size: 1em;
}

.reference-subtitle {
  font-size: 0.8em;
}
</style>
