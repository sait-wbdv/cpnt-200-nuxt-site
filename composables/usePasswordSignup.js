export default async function () {
  const supabase = useSupabaseClient();
  const { error } = await supabase.auth.signUp({
    email: "ashlynnknox@gmail.com",
    password: "deadWeather1",
  });
  if (error) {
    console.error(error);
  }
}
