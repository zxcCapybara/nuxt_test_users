<script setup>
const { user } = defineProps(["user"]);
</script>

<template>
  <nuxt-link :to="`/users/user-${user.id}`" class="text-white"
    >{{ user.firstName }} {{ user.lastName }}</nuxt-link
  >
</template>
