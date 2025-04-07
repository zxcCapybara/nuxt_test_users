<script setup>
const { data } = await useFetch("/api/example", {
  method: "post",
  body: {
    name: "Sanek Boobs",
    id: 1
  },
});
</script>

<template>
  <div>
    <h1>Home page</h1>
    <div class="bg-black text-xl text-white rounded-xl p-5 mt-3">
      <p>{{ data.message }}</p>
    </div>
  </div>
</template>

<style scoped></style>
