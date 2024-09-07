<script lang="ts" setup>
  import MiddleColumnHeader from './MiddleColumnHeader.vue';
  import MiddleMessages from './MiddleMessages.vue';
  import MiddleInput from './MiddleInput.vue';
</script>

<template>
  <div class="middle-column">
    <MiddleColumnHeader/>
    <MiddleMessages />
    <MiddleInput />
  </div>
</template>

<style lang="scss" scoped>
.middle-column {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}


</style>