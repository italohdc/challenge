<template>
  <div class="vote-page-container">
    <h1 class="title is-2">Choose your song!</h1>

    <p class="subtitle vote-subtitle">Pick your TOP 5 favorite songs</p>

    <b-field label="Nickname">
      <b-input v-model="nickname"></b-input>
    </b-field>

    <b-field label="Search music">
      <b-autocomplete
        v-model="search"
        placeholder="e.g. New Rules"
        :keep-first="true"
        :open-on-focus="true"
        :data="filteredMusic"
        :disabled="isMusicComplete"
        field="name"
        @select="selectMusic($event)"
      >
      </b-autocomplete>
    </b-field>
    <music-list
      :musics="selectedMusic"
      @delete="deleteMusic($event)"
    />
    <p v-if="remainingMusics !== 0" class="help-text has-text-centered">
      Choose {{ remainingMusics }}
      <span v-if="remainingMusics < 5">more</span> musics
    </p>
    <p v-else-if="!nickname" class="help-text has-text-centered">
      Please, enter your nickname
    </p>
    <div class="buttons">
      <b-button
        type="is-primary"
        expanded
        :disabled="!isFormComplete"
        :loading="isVoting"
        @click="tryVote()"
      >Vote</b-button>
    </div>
    <p v-if="errorMsg" class="help-text has-text-centered has-text-danger">
      {{ errorMsg }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MusicList from '../components/organisms/MusicList.vue';

export default {
  name: 'VotePage',
  components: {
    MusicList,
  },
  data() {
    return {
      search: '',
      nickname: '',
      selectedMusic: [],
      isVoting: false,
      errorMsg: null,
    };
  },
  methods: {
    ...mapActions({
      getAllMusics: 'getAllMusics',
      vote: 'registerVote',
    }),
    selectMusic(event) {
      if (event) {
        const alreadyContainsMusic = this.selectedMusic.find(music => music.id === event.id);
        if (!alreadyContainsMusic) this.selectedMusic.push({ ...event });
      }
    },
    deleteMusic(index) {
      this.selectedMusic.splice(index, 1);
      this.search = '';
    },
    async tryVote() {
      if (!this.isFormComplete && !this.isVoting) return;

      this.isVoting = true;
      this.errorMsg = null;
      try {
        await this.vote({ nickname: this.nickname, musics: this.selectedMusic });
      } catch (err) {
        this.isVoting = false;
        this.errorMsg = err;
      }
      this.isVoting = false;
    },
  },
  computed: {
    ...mapState({
      musics: state => state.musics,
    }),
    filteredMusic() {
      let musics = this.musics || [];
      musics = musics.map(music => ({
        ...music,
        name: `${music.name} - ${music.artists}`,
      }));
      return musics.filter(music => music.name
        .toString()
        .toLowerCase()
        .indexOf(this.search.toLowerCase()) >= 0);
    },
    isMusicComplete() {
      return this.selectedMusic.length >= 5;
    },
    isFormComplete() {
      return this.isMusicComplete && this.nickname;
    },
    remainingMusics() {
      return 5 - this.selectedMusic.length;
    },
  },
  mounted() {
    this.getAllMusics();
  },
};
</script>

<style lang="scss" scoped>
.vote-page-container {
  max-width: 400px;
  margin: 40px auto;
}

.vote-subtitle {
  margin-bottom: 2.4rem;
}

.help-text {
  margin-bottom: 1.2rem;
}
</style>
