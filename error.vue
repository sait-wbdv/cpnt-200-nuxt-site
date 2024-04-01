<script setup>
const error = useError();
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <main>
    <h2>{{ error.statusCode }}</h2>
    <p>{{ error.message }}</p>
    <button @click="handleError">Clear errors</button>
  </main>
</template>
