<script setup>
async function logout() {
  try {
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error(`signout error: ${error}`);
  }
}
</script>
<template>
  <header>
    <div><NuxtLink to="/">Logo</NuxtLink></div>
    <nav>
      <NuxtLink to="/login">Login Page</NuxtLink>
      <NuxtLink to="/signup">Sign Up Page</NuxtLink>
    </nav>
    <div>
      <button @click="logout">logout</button>
    </div>
  </header>
  <NuxtPage />
</template>
