<template>
  <div id="app">
    <page-home/>
    <app-modal/>
  </div>
</template>

<script>
import AppModal from './components/AppModal.vue';
import PageHome from './components/PageHome.vue';

export default {
  name: `app`,
  components: {
    AppModal,
    PageHome,
  },
};
</script>
