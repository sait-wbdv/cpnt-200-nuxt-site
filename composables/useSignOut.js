export default async function () {
  let { error } = await supabase.auth.signOut();
}
