import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const mutations = {
  showModal(state, componentName) {
    // eslint-disable-next-line no-param-reassign
    state.modalVisible = true;
    // eslint-disable-next-line no-param-reassign
    state.modalComponent = componentName;
  },
  hideModal(state) {
    // eslint-disable-next-line no-param-reassign
    state.modalVisible = false;
  },
};

export const state = {
  modalVisible: false,
  modalComponent: null,
};

export const store = new Vuex.Store({
  mutations,
  state,
});
