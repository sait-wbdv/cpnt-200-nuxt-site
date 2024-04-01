<script setup>
const { data: posts } = await useFetch("/api/blog", {
  headers: useRequestHeaders(["cookie"]),
});
</script>
<template>
  <main>
    <header>
      <h1>Server Side Blog Landing Page</h1>
      <p>
        Examples in the blog folders are using server api routes to pass data to
        the client
      </p>
    </header>
    <div>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>
