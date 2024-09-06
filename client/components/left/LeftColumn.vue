<template>
  <div class="left-column" data-placement="show">
    <LeftColumnHeader />
  </div>
</template>

<style>
  .left-column {
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
    transition: transform 250ms ease-out;
  }

  @media (max-width: 640px) {
    .left-column {
      position: fixed;
      top: 0;
      left: 0;
      height: 100dvh;
      width: 100dvw;
      z-index: 4;
      border-right: none;
    }

    .left-column[data-placement="hide"] {
      transform: translateX(-100%);
    }

    .left-column[data-placement="show"] {
      transform: translateX(0);
    }
  }
</style>
