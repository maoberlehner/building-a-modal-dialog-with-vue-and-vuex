<template>
  <div class="c-pageHome">
    <button class="c-pageHome__login" @click="showModal('ModalLogin')">Login</button>

    <app-modal></app-modal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import AppModal from './AppModal';

export default {
  name: 'PageHome',
  components: {
    AppModal,
  },
  methods: {
    ...mapMutations(['showModal']),
  },
};
</script>
