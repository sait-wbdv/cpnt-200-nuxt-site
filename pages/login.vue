<script setup>
const email = ref("");
const password = ref("");

let { data, error } = await supabase.auth.signInWithPassword({
  email: email.value,
  password: password.value,
});
</script>
<template>
  <main>
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
      <input type="submit" value="Sign In" @click="useSignIn" />
    </form>
  </main>
</template>
