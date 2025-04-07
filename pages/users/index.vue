<script setup>
definePageMeta({
  layout: "users",
});

const { data } = await useFetch("https://dummyjson.com/users")
const users = ref(data.value.users)
</script>

<template>
  <div>
    <Head>
      <Title>All users</Title>
      <Meta name="description" content="All users page" />
    </Head>
    <h1>All users:</h1>
    <ul class="flex text-xl gap-3 pt-3 flex-wrap">
      <li v-for="user in users" :key="user.id" class="bg-black p-2 rounded hover:bg-[#333]">
        <UserLink :user="user"/>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
