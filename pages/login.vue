<script setup>
const supabase = useSupabaseClient();
// TODO: Create a email and password variables
const email = ref("");
const password = ref("");
async function signUp() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      emailRedirectTo: "http://localhost:3000/confirm",
    },
  });
}
</script>
<template>
  <main>
    <h1>Login Page</h1>
    <p>
      <span>{{ email }}</span> <span>{{ password }}</span>
    </p>
    <form>
      <!-- Bind the varaibles to the input with v-model -->
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
