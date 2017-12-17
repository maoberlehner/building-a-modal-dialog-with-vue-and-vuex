import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line no-underscore-dangle
export function __createMockMutations(customMutations) {
  return Object.assign({
    showModal: jest.fn(),
    hideModal: jest.fn(),
  }, customMutations);
}

export const mutations = __createMockMutations();

// eslint-disable-next-line no-underscore-dangle
export function __createMockState(customState) {
  return Object.assign({
    modalVisible: false,
    modalComponent: null,
  }, customState);
}

export const state = __createMockState();

// eslint-disable-next-line no-underscore-dangle
export function __createMocks(custom = {
  mutations: {},
  state: {},
}) {
  const mockMutations = __createMockMutations(custom.mutations);
  const mockState = __createMockState(custom.state);

  return {
    mutations: mockMutations,
    state: mockState,
    store: new Vuex.Store({
      mutations: mockMutations,
      state: mockState,
    }),
  };
}

export const { store } = __createMocks();
