<template>
  <a
    href="#-124434303"
    class="ChatListItem"
    draggable="false"
    role="button"
    tabindex="0"
  >
    <UAvatar
      class="Avatar"
      size="lg"
      src="https://avatars.githubusercontent.com/u/739984?v=4"
      alt="Avatar"
    />
    <section class="info">
      <h3>Elenchii</h3>
      <span>14:33</span>
    </section>
    <section class="message">
      <p>Hi, how are you?</p>
    </section>
  </a>
</template>

<style scoped>
.ChatListItem {
  min-height: 3rem;
  padding: 0.5625rem 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline-start: 4.25rem;
  user-select: none;
}

.info,
.message {
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.375rem;
}

.info > h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.325rem;
}

.message {
  margin-top: 0.125rem;
}

.Avatar {
  position: absolute;
  inset-inline-start: 0.5625rem;
}
</style>
