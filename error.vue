<template>
  <div class="centered-div text-center text-black text-5xl">
    <p>Oops... Page not found</p>
    <br>
    <p class="red">404</p>
    <br>
    <nuxt-link to="/" class="underline">Go to Home</nuxt-link>
  </div>
</template>

<style scoped>

.centered-div {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.underline {
  text-decoration: underline;
}

.red {
  color: red;
}
</style>