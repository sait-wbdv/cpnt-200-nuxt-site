<script setup>
const { data: blog } = await useFetch("/api/blog", {
  headers: useRequestHeaders(["cookie"]),
});
</script>
<template>
  <main>
    <header>
      <h1>Blog Landing Page</h1>
    </header>
    <div>
      <ul>
        <li v-for="({ title }, index) in blog" :key="index">
          <NuxtLink to="/">{{ title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>
