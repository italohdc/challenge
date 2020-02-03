import Vue from 'vue';
import Vuex from 'vuex';

import { ModalProgrammatic as Modal } from 'buefy';
import MusicService from '../services/music';
import VoteService from '../services/vote';

import SuccessVote from '../components/atoms/SuccessVote.vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musics: [],
  },

  mutations: {
    SAVE_MUSICS(state, musics) {
      state.musics = musics;
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
  },

  modules: {
  },
});
