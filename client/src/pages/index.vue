<template>
  <div class="main-container">
    <LeftColumn />
    <MiddleColumn />
    <RightColumn />
  </div>
</template>

<script lang="ts" setup>
import LeftColumn from "../components/left/LeftColumn.vue";
import MiddleColumn from "../components/middle/MiddleColumn.vue";
import RightColumn from "../components/right/RightColumn.vue";
</script>

<style scoped>
.main-container {
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
  padding: 0.25rem;
  z-index: 1;
}

@media (min-width: 1276px) {
  .main-container {
    display: grid;
    grid-template-columns: minmax(250px, min(45%, 400px)) 1fr 320px;
    grid-template-rows: 1fr;
    gap: 0.5rem;
    grid-auto-flow: row;
    grid-template-areas: ". . .";
  }
}

@media (min-width: 640px) and (max-width: 1276px) {
  .main-container {
    display: grid;
    grid-template-columns: minmax(250px, min(45%, 400px)) 1fr;
    grid-template-rows: 1fr;
    gap: 0.5rem;
    grid-auto-flow: row;
    grid-template-areas: ". .";
  }
}


</style>
