<script setup>
const email = ref("");
const password = ref("");
</script>
<template>
  <main>
    <header>
      <h1>Sign Up Page</h1>
    </header>
    <form>
      <label for="email">
        Email:
        <input type="email" name="email" v-model="email" />
      </label>
      <label for="password">
        Password:
        <input type="password" name="password" v-model="password" />
      </label>
      <button @click="usePasswordSignup">Sign Up</button>
    </form>
  </main>
</template>
