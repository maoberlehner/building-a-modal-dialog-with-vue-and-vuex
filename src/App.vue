<template>
  <div id="app">
    <page-home></page-home>
    <app-modal></app-modal>
  </div>
</template>

<script>
import AppModal from './components/AppModal';
import PageHome from './components/PageHome';

export default {
  name: 'app',
  components: {
    AppModal,
    PageHome,
  },
};
</script>
