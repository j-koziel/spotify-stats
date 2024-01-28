import { supabase } from "$lib/supabase-client"

export async function load() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "spotify"
  })

  console.log(data)
  console.log(error)

  return data
}

// export async function signOutOfSpotify() {
//   const { error } = await supabase.auth.signOut()
// }
