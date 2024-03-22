<script setup>
const client = useSupabaseClient();

const { data: films } = await useAsyncData("film", async () => {
  try {
    let { data, error } = await client.from("film").select("title");
    if (error) {
      throw new Error(`Fetch Error: ${error}`);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
});
</script>
<template>
  <div>
    <ul>
      <li v-for="(film, index) in films" :key="index">{{ film.title }}</li>
    </ul>
  </div>
</template>
