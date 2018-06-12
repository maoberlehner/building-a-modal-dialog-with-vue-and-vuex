import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import { __createMocks as createStoreMocks } from '../../store';

import ModalLogin from './ModalLogin.vue';

// Tell Jest to use the mock
// implementation of the store.
jest.mock(`../../store`);

const localVue = createLocalVue();

localVue.use(Vuex);

describe(`ModalLogin`, () => {
  let storeMocks;
  let wrapper;

  beforeEach(() => {
    // Create a fresh store and wrapper
    // instance for every test case.
    storeMocks = createStoreMocks();
    wrapper = shallowMount(ModalLogin, {
      store: storeMocks.store,
      localVue,
    });
  });

  test(`It should close the modal when clicking cancel.`, () => {
    wrapper.find(`.c-modalLogin__cancel`).trigger(`click`);

    expect(storeMocks.mutations.hideModal).toBeCalled();
  });

  test(`It should close the modal after successfully logging in.`, () => {
    wrapper.find(`.c-modalLogin__login`).trigger(`click`);

    expect(storeMocks.mutations.hideModal).toBeCalled();
  });
});
