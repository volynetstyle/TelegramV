<template>
  <section class="middle-input">
    <UTextarea
      autoresize
      :rows="1"
      :maxrows="10"
      placeholder="Search..."
      size="md"
      class="w-full"
      model-value=""
    />
  </section>
</template>

<style scoped lang="scss">
.middle-input {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 0.875rem 1.25rem;
}
</style>
