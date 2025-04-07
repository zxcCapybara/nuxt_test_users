<script setup>
useHead({
  title: "Contacts",
  meta: [{ name: "description", content: "Contacts page" }],
});

const name = ref("");
const email = ref("");
const message = ref("");
const isSub = ref(false);
const resultMessage = ref("");

const sybmitForm = async () => {
  isSub.value = true;
  resultMessage.value = "";

  const { error } = await useFetch("/api/contacts", {
    method: "post",
    body: {
      name: name.value,
      email: email.value,
      message: message.value,
    },
  });
  if (error.value) {
    resultMessage.value = "Ошибка отправки сообщения:" + error.value;
  } else {
    resultMessage.value = "Сообщение успешно отправлено";
    name.value = "";
    email.value = "";
    message.value = "";
    isSub.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="mb-3">Contacts</h1>

    <form @sumbit.prevent="sybmitForm" class="flex flex-col gap-5 w-1/2">
      <UInput
        type="text"
        id="name"
        v-model="name"
        placeholder="Name"
        color="info"
        class=""
      />
      <UInput
        type="email"
        id="email"
        v-model="email"
        placeholder="Email"
        color="info"
      />
      <UTextarea
        name="message"
        color="info"
        id="message"
        v-model="message"
        placeholder="Enter message"
      ></UTextarea>
      <UButton
        type="submit"
        color="neutral"
        variant="outline"
        :disabled="isSub"
        >{{ isSub ? "Отправляем..." : "Отправить" }}</UButton
      >

      <p v-if="resultMessage">
        {{ resultMessage }}
      </p>
    </form>
  </div>
</template>

<style scoped></style>
