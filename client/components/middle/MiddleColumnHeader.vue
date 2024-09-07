<template>
  <div class="middle-column-header">
    <UButton
      @click="openLeftColumn"
      class="chatList-back"
      icon="i-hugeicons-arrow-turn-backward"
      :ui="{ rounded: 'rounded-full' }"
      variant="ghost"
      size="md"
    />
   
    <div class="user-header" @click="openRightColumn"
    >
      <UAvatar
        class="middle-avatar"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        size="md"
      />
      <h3>Elenchii</h3>
      <span>14:33</span>
    </div>

    <MiddleHeaderMenu class="ml-auto"/>    
  </div>
</template>

<script lang="ts" setup>
import { useUIStore } from "~/stores/UIStore"; 
import MiddleHeaderMenu from "./MiddleHeaderMenu.vue";

const {toggleRightColumn, toggleLeftColumn} = useUIStore();

const openLeftColumn = () => {
  toggleLeftColumn();
};

const openRightColumn = () => {
  toggleRightColumn();
  console.log("openRightColumn")
};
</script>

<style scoped>
.middle-column-header {
  position: relative;
  display: flex;
  align-items: center;
  height: 3.5rem;
}

.user-header {
  min-height: 3rem;
  padding: 0.5625rem 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline-start: 4.25rem;
  user-select: none;
  cursor: pointer;
}

.middle-avatar {
  margin: 0;
  position: absolute;
  inset-inline-start: 0.5625rem;
}

.user-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.325rem;
}

.user-header span {
  font-size: 0.75rem;
  line-height: 1.325rem;
}


@media (min-width: 640px) {
  .chatList-back {
    display: none;
  }
}
</style>
