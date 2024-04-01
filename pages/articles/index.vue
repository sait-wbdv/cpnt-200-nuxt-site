<script setup>
const supabase = useSupabaseClient();

const { data: articles } = await useAsyncData("restaurant", async () => {
  const { data } = await supabase.from("blog").select("title");
  data.map((article) => {
    const slug = slugify(article.title);
    article.slug = slug;
  });
  return data;
});
</script>
<template>
  <main>
    <header>
      <h1>Articles</h1>
      <p>
        The examples in the articles directory are all using client side
        fetching and rendering to contrast with those in blog.
      </p>
    </header>
    <section>
      <ul>
        <li v-for="(article, index) in articles" :key="index">
          <NuxtLink :to="`/articles/post/${article.slug}`">
            {{ article.title }}
          </NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>
