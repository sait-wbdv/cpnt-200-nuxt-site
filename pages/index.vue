<script setup>
const client = useSupabaseClient();

const { data: films } = await useAsyncData("film", async () => {
  try {
    let { data, error } = await client.from("film").select("title");
    if (error) {
      throw new Error(`Fetch Error: ${error}`);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
});
const { data: customers } = await useAsyncData("customer", async () => {
  try {
    let { data, error } = await client
      .from("customer")
      .select("first_name", "last_name");
    if (error) {
      throw new Error(`Fetch Error: ${error}`);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
});
</script>
<template>
  <div>
    <h1>Movie Store Lists</h1>
    <section>
      <!-- TODO: Hide this to unsigned in users -->
      <h2>Users: visible to signed in user</h2>
      <ul>
        <li v-for="(customer, index) in customers" :key="index">
          {{ customer.first_name }} {{ customer.last_name }}
        </li>
      </ul>
    </section>
    <section>
      <h2>Movies: Visible to All</h2>
      <ul>
        <li v-for="(film, index) in films" :key="index">{{ film.title }}</li>
      </ul>
    </section>
  </div>
</template>
