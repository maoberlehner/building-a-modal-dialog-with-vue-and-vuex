import Vuex from 'vuex';
import { createLocalVue, shallow } from 'vue-test-utils';
import { __createMocks as createStoreMocks } from '../store';

import PageHome from './PageHome';

// Tell Jest to use the mock
// implementation of the store.
jest.mock('../store');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('PageHome', () => {
  let storeMocks;
  let wrapper;

  beforeEach(() => {
    // Create a fresh store and wrapper
    // instance for every test case.
    storeMocks = createStoreMocks();
    wrapper = shallow(PageHome, {
      store: storeMocks.store,
      localVue,
    });
  });

  test('It should open the modal when clicking the login button.', () => {
    wrapper.find('.c-pageHome__login').trigger('click');

    expect(storeMocks.mutations.showModal).toBeCalled();
  });
});
