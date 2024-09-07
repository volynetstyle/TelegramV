<template>
  <div class="left-column-header">
    <UInput
      class="w-full"
      icon="i-heroicons-magnifying-glass-20-solid"
      size="xl"
      color="white"
      :trailing="false"
      placeholder="Search..."
    />
    <UButton
      class="chat-back"
      @click="openLeftColumn"
      icon="i-hugeicons-arrow-turn-backward"
      color="white"
      size="xl"
    />
  </div>
</template>

<script lang="ts" setup>
import { useUIStore } from "~/src/stores/UIStore";

const uiStore = useUIStore();

const openLeftColumn = () => {
  uiStore.toggleLeftColumn();
};
</script>

<style scoped>
.left-column-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

@media (min-width: 640px) {
  .chat-back {
    display: none;
  }
}
</style>
