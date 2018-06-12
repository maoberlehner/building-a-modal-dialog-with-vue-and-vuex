<template>
  <div class="c-modalLogin">
    <div>
      <label for="name">User</label>
      <input name="User">
    </div>

    <div>
      <label for ="password">Password</label>
      <input
        name="password"
        type="password"
      >
    </div>

    <button
      class="c-modalLogin__cancel"
      @click="hideModal"
    >
      Cancel
    </button>
    <button
      class="c-modalLogin__login"
      @click="login"
    >
      Login
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: `ModalLogin`,
  methods: {
    ...mapMutations([
      `hideModal`,
    ]),
    login() {
      // ...
      // Login logic would be here.
      // ...

      this.hideModal();
    },
  },
};
</script>

<style lang="scss">
.c-modalLogin {
  > :not(:first-child) {
    margin-top: 1em;
  }

  input {
    width: 100%;
  }
}
</style>

