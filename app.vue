<script setup>
// import the supabase client
const client = useSupabaseClient();
// wrap a nuxt fetch composable around this query
// GET ALL MOVIE TITLES
const { data: films } = await useAsyncData("film", async () => {
  try {
    let { data, error } = await client.from("film").select("title");
    return data;
  } catch (error) {
    console.error(error);
  }
});
</script>
<template>
  <div>
    <ul>
      <li v-for="film in films" :key="film.id">{{ film.title }}</li>
    </ul>
  </div>
</template>
