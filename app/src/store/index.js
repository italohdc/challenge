import Vue from 'vue';
import Vuex from 'vuex';

import { ModalProgrammatic as Modal } from 'buefy';
import MusicService from '../services/music';
import VoteService from '../services/vote';
import ResultService from '../services/result';

import SuccessVote from '../components/atoms/SuccessVote.vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musics: [],
    rank: [],
    users: [],
  },

  mutations: {
    SAVE_MUSICS(state, musics) {
      state.musics = musics;
    },
    SAVE_RANK(state, rank) {
      state.rank = rank;
    },
    SAVE_USERS(state, users) {
      state.users = users;
    },
  },

  actions: {
    async getAllMusics({ commit }) {
      const musics = await MusicService.getAll();
      commit('SAVE_MUSICS', musics);
    },
    async registerVote(parsers, { nickname, musics }) {
      const musicIDs = musics.map(music => music.id);
      await VoteService.registerVote(nickname, musicIDs);
      Modal.open({
        component: SuccessVote,
        hasModalCard: true,
        trapFocus: true,
      });
    },
    async getRank({ commit }) {
      const rank = await ResultService.getRank();
      commit('SAVE_RANK', rank);
    },
    async getUsersContributions({ commit }) {
      const contributions = await ResultService.getUsersContributions();
      commit('SAVE_USERS', contributions);
    },
  },
});
