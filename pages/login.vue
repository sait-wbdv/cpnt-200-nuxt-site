<script setup>
const email = ref("");
const password = ref("");
</script>
<template>
  <main>
    <header>
      <h1>Login</h1>
    </header>
    <form>
      <label for="email">
        Email:
        <input type="email" id="email" name="email" v-model="email" />
      </label>
      <label for="password">
        Email:
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
        />
      </label>
      <input
        type="submit"
        value="Sign In"
        @click="usePasswordLogin(email, password)"
      />
    </form>
    <button @click="useGoogleLogin">Login with Google</button>
  </main>
</template>
