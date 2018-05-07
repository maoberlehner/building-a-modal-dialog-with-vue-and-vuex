<template>
  <div class="c-pageHome">
    <button class="c-pageHome__login" @click="showModal('ModalLogin')">Login</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'PageHome',
  methods: {
    ...mapMutations(['showModal']),
  },
};
</script>
