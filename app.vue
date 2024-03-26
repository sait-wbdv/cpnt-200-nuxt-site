<script setup>
const supabase = useSupabaseClient();
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
  <NuxtPage />
</template>
