<script setup>
const supabase = useSupabaseClient();
const email = ref("");
const password = ref("");
async function login() {
  try {
    let { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
  } catch (err) {
    console.log(data);
  }
}
</script>
<template>
  <main>
    <header>
      <h1>Login Page</h1>
    </header>
    <form>
      <!-- Bind the varaibles to the input with v-model -->
      <label for="email">
        Email:
        <input type="email" name="email" id="email" v-model="email" />
      </label>
      <label for="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
        />
      </label>
      <input type="submit" value="login" @click="login" />
    </form>
  </main>
</template>
