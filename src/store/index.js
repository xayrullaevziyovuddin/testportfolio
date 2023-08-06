// store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    repositories: []
  },
  mutations: {
    setRepositories(state, repositories) {
      state.repositories = repositories;
    }
  },
  actions: {
    async fetchRepositories({ commit }) {
      try {
        const response = await axios.get('https://api.github.com/users/xayrullaevziyovuddin/repos');
        const repositories = response.data;
        commit('setRepositories', repositories);
      } catch (error) {
        console.error('Ошибка произошла при получении данных ' + error);
      }
    }
  }
});
