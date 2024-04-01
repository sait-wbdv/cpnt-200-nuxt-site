<script setup>
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
async function signUp() {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) {
      throw error;
    }
  } catch (err) {
    console.error(`Sign Up Error: ${err}`);
  }
}
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
      <button @click="signUp">Sign Up</button>
    </form>
  </main>
</template>
