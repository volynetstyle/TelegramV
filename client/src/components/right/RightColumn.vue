<script setup lang="ts">
import { useUIStore } from "~/src/stores/UIStore"; 

const uiStore = useUIStore();

</script>

<template>
  <div
    class="right-column"
    :data-placement="uiStore.rightColumn ? 'show' : 'hide'"
  >
  
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus porro temporibus magnam repudiandae dolor corrupti, odit iusto cupiditate possimus doloribus reprehenderit nesciunt. Ab ratione impedit enim itaque neque minus?
  </div>
</template>

<style scoped>
.right-column {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 0.25rem;
  background-color: white;
  max-width: 400px;
  z-index: 2;
}

@media (max-width: 1276px) {
  .right-column {
    position: fixed;
    top: 0;
    right: 0;
    height: 100dvh;
    border-right: none;
    background-color: white;
    transition: transform 250ms ease-out;
  }
  
  .right-column[data-placement="hide"] {
    transform: translateX(100%);
  }

  .right-column[data-placement="show"] {
    transform: translateX(0);
  }
}
</style>