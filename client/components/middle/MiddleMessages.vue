<template>
  <div class="middle-messages">
    <div class="messages">
      <Message />
      <Message />
      <Message />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Message from "./message/Message.vue";
</script>

<style scoped lang="scss">
.middle-messages {
  display: flex;
  flex-direction: column-reverse;
  margin-top: auto;
  gap: 0.5rem;
  height: 100%;
  overflow-y: auto;
  padding: 0 0.875rem 0.25rem;
}

.messages {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
