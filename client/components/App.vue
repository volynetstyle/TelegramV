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

<style lang="scss">
.main-container {
  --transition-standard-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --transition-standard-in-time: 0.3s;
  --transition-standard-out-time: 0.25s;
  --transition-standard-in: var(--transition-standard-in-time)
    var(--transition-standard-easing);
  --transition-standard-out: var(--transition-standard-out-time)
    var(--transition-standard-easing);

  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
  padding: 0.25rem;
  z-index: 1;

  @media (min-width: 1276px) {
    display: grid;
    grid-template-columns: minmax(250px, min(45%, 400px)) 1fr auto;
    grid-template-rows: 1fr;
    gap: 0.5rem;
    grid-auto-flow: row;
    grid-template-areas: ". . .";
  }

  @media (min-width: 640px) and (max-width: 1276px) {
    display: grid;
    grid-template-columns: minmax(250px, min(45%, 400px)) 1fr;
    grid-template-rows: 1fr;
    gap: 0.5rem;
    grid-auto-flow: row;
    grid-template-areas: ". .";
  }
}
</style>
