export default async function (email, password) {
  const supabase = useSupabaseClient();
  return ({ data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  }));
}
