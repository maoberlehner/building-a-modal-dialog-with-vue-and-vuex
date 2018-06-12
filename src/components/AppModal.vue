<template>
  <div class="c-appModal">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div
        v-if="visible"
        class="c-appModal__overlay"
      />
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <div
        v-if="visible"
        class="c-appModal__content"
        @click.self="hideModal"
      >
        <div class="c-appModal__innerContent">
          <component :is="component"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: `AppModal`,
  data() {
    return {
      component: null,
    };
  },
  computed: {
    ...mapState({
      visible: `modalVisible`,
      modalComponent: `modalComponent`,
    }),
  },
  watch: {
    modalComponent(componentName) {
      if (!componentName) return;

      Vue.component(componentName, () => import(`./modal/${componentName}`));

      this.component = componentName;
    },
  },
  created() {
    const escapeHandler = (e) => {
      if (e.key === `Escape` && this.visible) {
        this.hideModal();
      }
    };

    document.addEventListener(`keydown`, escapeHandler);
    this.$once(`hook:destroyed`, () => {
      document.removeEventListener(`keydown`, escapeHandler);
    });
  },
  methods: {
    ...mapMutations([`hideModal`]),
  },
};
</script>

<style lang="scss">
.c-appModal {
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 900;
    background: rgba(#222, 0.8);
  }

  &__content {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 901;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__innerContent {
    max-width: 16em;
    padding: 2em;
    background: #fff;
  }
}

.animated {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}

.fadeOut {
  animation-name: fadeOut;

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
}

.fadeInUp {
  animation-name: fadeInUp;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }
}

.fadeOutDown {
  animation-name: fadeOutDown;

  @keyframes fadeOutDown {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }
}
</style>
