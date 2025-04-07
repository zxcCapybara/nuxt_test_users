<template>
  <div>
    <header class="p-5 text-xl bg-black">
      <ul class="flex justify-center gap-4 text-white">
        <li><nuxt-link to="/">Главная</nuxt-link></li>
        <li><nuxt-link to="/contact">Контакты</nuxt-link></li>
        <li><nuxt-link to="/users">Пользователи</nuxt-link></li>
      </ul>
    </header>
    <div class="container mx-auto py-10"><slot /></div>

    <footer class="p-5 text-xl border-t-1 border-gray-700">
      <p class="color-white container mx-auto">All rigth reserved &copy;</p>
    </footer>
  </div>
</template>

<style>
header a:not(.router-link-exact-active):hover {
  text-decoration: underline;
}
header a.router-link-exact-active {
  color: gray;
  font-weight: 500;
}
</style>
