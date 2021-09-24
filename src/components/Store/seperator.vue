<template>
  <div class="seperator mt-4 mb-4 text-center">
    <h4>What we've Got For You!</h4>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat
      error quis cupiditate, illo nulla?
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.seperator {
  padding: 60px 0;

  h4 {
    font-size: 5rem;
    letter-spacing: -2px;
    padding: 10px 0;
    text-transform: capitalize;
  }
  p {
    font-size: 0.75rem;
  }
}

@media (max-width: 768px) {
  h4 {
    font-size: 2.3rem !important;
  }
}
</style>
