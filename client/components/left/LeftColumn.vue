<template>
  <div
    class="left-column"
    :data-placement="uiStore.leftColumn ? 'show' : 'hide'"
  >
    <LeftColumnHeader />
    <ChatList />
  </div>
</template>

<script lang="ts" setup>
import ChatList from "./screens/chat/ChatList.vue";
import LeftColumnHeader from "./LeftColumnHeader.vue";
import { useUIStore } from "~/stores/UIStore";

const uiStore = useUIStore();
</script>

<style scoped>
.left-column {
  position: relative;
  overflow: hidden;
  height: 100dvh;
  width: 100%;
  padding: 0.25rem;
  z-index: 3;
  background-color: inherit;
}

@media (max-width: 640px) {
  .left-column {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    height: 100dvh;
    width: 100dvw;
    border-right: none;
    transition: transform var(--transition-standard-in);
  }

  .left-column[data-placement="hide"] {
    transform: translateX(-100%);
  }

  .left-column[data-placement="show"] {
    transform: translateX(0);
  }
}
</style>
