<script setup>
const route = useRoute();
const supabase = useSupabaseClient();
console.log(route.params.post);
const { data: post } = await useAsyncData("post", async () => {
  const { data } = await supabase
    .from("blog")
    .select("*")
    .eq("slug", route.params.post)
    .single();

  return data;
});
</script>
<template>
  <main>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <p>Last Updated: {{ post.date_updated }}</p>
  </main>
</template>
<style>
main {
  max-width: 800px;
  margin: 0 auto;
}
</style>
