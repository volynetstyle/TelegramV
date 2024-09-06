<template>
  <div class="middle-column-header">
    <UAvatar class="middle-avatar" src="https://avatars.githubusercontent.com/u/739984?v=4" size="md" />
    <h3>Elenchii</h3>
    <span>14:33</span>
  </div>
</template>

<style scoped>
  .middle-column-header {
    min-height: 3rem;
    padding: 0.5625rem 0.75rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline-start: 4.25rem;
    user-select: none;
  }

  .middle-avatar {
    margin: 0;
    position: absolute;
    inset-inline-start: 0.5625rem;
  }

  .middle-column-header h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.325rem;
  }

  .middle-column-header span {
    font-size: .75rem;
    line-height: 1.325rem;

  }
</style>