<template>
  <div class="results-page-container">
    <h1 class="title is-2">Dashboard</h1>

    <h3 class="title is-4 bigger-margin-top">TOP 5</h3>
    <p class="subtitle is-6 minimal-margin-bottom">Most rated musics</p>
    <music-list
      v-if="!isRankLoading"
      :musics="rank"
      @delete="deleteMusic($event)"
      hideDelete
    />
    <div v-else>
      <loading-music-card
        v-for="index in 5"
        :key="index"
        class="loading-rank"
      />
    </div>

    <h3 class="title is-4 bigger-margin-top">Users Contributions</h3>
    <p class="subtitle is-6 minimal-margin-bottom">
      How many musics the user rated that are on TOP 5
    </p>
    <b-table
      :data="users"
      :columns="columns"
      :loading="isTableLoading"
      :paginated="true"
      :per-page="10"
      :current-page.sync="currentPage"
      default-sort="nickname"
    ></b-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MusicList from '../components/organisms/MusicList.vue';

import LoadingMusicCard from '../components/molecules/LoadingMusicCard.vue';

export default {
  name: 'ResultsPage',
  components: {
    MusicList,
    LoadingMusicCard,
  },
  data() {
    return {
      currentPage: 1,
      columns: [
        {
          field: 'nickname',
          label: 'Nickname',
          sortable: true,
        },
        {
          field: 'validVotes',
          label: 'Contributions',
          sortable: true,
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      getRank: 'getRank',
      getUsersContributions: 'getUsersContributions',
    }),
  },
  computed: {
    ...mapState({
      rank: state => state.rank,
      users: state => state.users,
    }),
    isTableLoading() {
      const users = this.users || [];
      return users.length === 0;
    },
    isRankLoading() {
      const rank = this.rank || [];
      return rank.length === 0;
    },
  },
  mounted() {
    this.getRank();
    this.getUsersContributions();
  },
};
</script>

<style lang="scss" scoped>
.results-page-container {
  max-width: 400px;
  margin: 40px auto;
}

.bigger-margin-top {
  margin-top: 2.4rem;
}

.minimal-margin-bottom {
  margin-bottom: 0.1rem;
}

.loading-rank {
  margin-top: 0.6rem;
}
</style>
