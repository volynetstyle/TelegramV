<template>
  <div class="main-container">
    <LeftColumn/>
    <MiddleColumn/>
    <RightColumn/>
  </div>
</template>

<style scoped>
  .main-container {
    display: grid;
    grid-template-columns: minmax(250px, min(45%, 400px)) 1fr;
    grid-template-rows: 1fr;
    gap: .5rem;
    grid-auto-flow: row;
    grid-template-areas:
      ". . .";
    height: 100dvh;
    width: 100dvw;
    overflow: hidden;
    padding: .25rem;
    z-index: 1;
  }
</style>