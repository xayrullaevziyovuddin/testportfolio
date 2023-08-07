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

/* // store/index.js
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
        let page = 1;
        let repositories = [];

        while (true) {
          const response = await axios.get(`https://api.github.com/users/levi/repos?page=${page}`);
          if (response.data.length === 0) {
            break; // No more repositories to fetch
          }
          repositories = repositories.concat(response.data);
          page++;
        }

        commit('setRepositories', repositories);
      } catch (error) {
        console.error('Ошибка произошла при получении данных ' + error);
      }
    }
  }
});
 */