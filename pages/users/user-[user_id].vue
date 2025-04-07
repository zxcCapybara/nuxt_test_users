<script setup>
definePageMeta({
  layout: "users",
});

const { user_id } = useRoute().params;

const { data } = await useFetch(`https://dummyjson.com/users/${user_id}`);
</script>

<template>
  
  <div class="flex justify-center">
    <Head>
      <Title>User id: {{ user_id }}</Title>
      <Meta name="description" content="All users page" />
    </Head>
    <nuxt-link to="/users" class="text-black">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
    >
      <!-- Icon from Typicons by Stephen Hutchings - https://creativecommons.org/licenses/by-sa/4.0/ -->
      <path
        fill="currentColor"
        d="M12 9.059V6.5a1.001 1.001 0 0 0-1.707-.708L4 12l6.293 6.207a.997.997 0 0 0 1.414 0A1 1 0 0 0 12 17.5v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941"
      />
    </svg>
  </nuxt-link>
    <div class="bg-black p-5 rounded-xl flex gap-12 w-5xl">
      <div class="flex items-center">
        <img class="w-52" :src="data.image" alt="avatar" />
      </div>
      <div class="text-white">
        <p class="text-5xl pb-5">
          {{ data.firstName }} {{ data.lastName }} (id: {{ user_id }}, age:
          {{ data.age }})
        </p>
        <div class="text-xl flex flex-col gap-5">
          <hr />
          <p><strong>Email</strong>: {{ data.email }}</p>
          <hr />
          <p><strong>Phone</strong>: {{ data.phone }}</p>
          <hr />
          <p>
            <strong>Adress</strong>: {{ data.address.address }},
            {{ data.address.city }},
            {{ data.address.state }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: white !important;
}
</style>
