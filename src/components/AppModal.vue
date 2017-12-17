<template>
  <div class="c-appModal" @keydown.esc="hideModal">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="c-appModal__overlay" v-if="visible"></div>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <div class="c-appModal__content" v-if="visible" @click.self="hideModal">
        <div class="c-appModal__innerContent">
          <component :is="component"></component>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'AppModal',
  data() {
    return {
      component: null,
    };
  },
  computed: {
    ...mapState({
      visible: 'modalVisible',
      modalComponent: 'modalComponent',
    }),
  },
  methods: {
    ...mapMutations(['hideModal']),
  },
  watch: {
    modalComponent(componentName) {
      if (!componentName) return;

      Vue.component(componentName, () => import(`./modal/${componentName}`));

      this.component = componentName;
    },
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
