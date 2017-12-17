import Vue from 'vue';

import { store } from './store';
import App from './App';

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  store,
});
