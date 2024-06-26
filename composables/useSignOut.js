export default async function () {
  const supabase = useSupabaseClient();
  let { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
  }
}
