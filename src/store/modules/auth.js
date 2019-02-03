import qs from 'qs';
import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
     window.localStorage.removeItem('imgur_token');
  },
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    let { access_token } = qs.parse(hash.replace('#',''));

    commit('setToken', access_token);
    window.localStorage.setItem('imgur_token', access_token);

    router.push('/');
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};