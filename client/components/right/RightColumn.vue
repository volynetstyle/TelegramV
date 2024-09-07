<script setup lang="ts">
import { useUIStore } from "~/stores/UIStore";

const uiStore = useUIStore();

const openRightColumn = () => {
  uiStore.toggleRightColumn();
};
</script>

<template>
  <div
    class="right-column"
    :data-placement="uiStore.rightColumn ? 'show' : 'hide'"
  >
    <UIcon name="i-hugeicons-arrow-turn-backward" @click="openRightColumn"/>
    <div class="right-column-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus
      porro temporibus magnam repudiandae dolor corrupti, odit iusto cupiditate
      possimus doloribus reprehenderit nesciunt. Ab ratione impedit enim itaque
      neque minus?
    </div>
  </div>
</template>

<style scoped>
.right-column {
  height: 100dvh;
  position: relative;
  max-width: var(--right-width);
  z-index: 2;
  overflow: hidden;
}

.right-column-content {
  padding: 0.25rem;
  width: var(--right-width);
}

@media (min-width: 1276px) {
  .right-column {
    --right-width: 25vw;
    transition-property: max-width;
    transition: max-width var(--transition-standard-in);
  }

  .right-column[data-placement="hide"] {
    max-width: 0;
  }

  .right-column[data-placement="show"] {
    max-width: var(--right-width);
  }
}

@media (max-width: 1276px){
  .right-column {
    --right-width: 320px;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    border-right: none;
    transition: transform 250ms ease-out;
  }

  .right-column[data-placement="hide"] {
    transform: translateX(100%);
  }

  .right-column[data-placement="show"] {
    transform: translateX(0);
  }
}

@media (max-width: 420px) {
  .right-column {
    --right-width: 100%;
  }
}
</style>
