<template>
  <div class="message is-out">
    <div class="message-buble">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa vero optio
    corporis mollitia maxime minima laborum eum nesciunt, velit exercitationem?
    Distinctio adipisci ullam totam doloremque sequi. Ab in magnam
    reprehenderit.s
    </div>
  </div>
</template>

<style scoped lang="scss">  
  .message {
    display: flex;

    &.is-out {
      flex-direction: row-reverse;
    }

  }
  
  .message-buble {
    --max-width: 85%;
    background-color: #353434;
    max-width: var(--max-width);
    border-radius: 0.25rem;

  }

</style>