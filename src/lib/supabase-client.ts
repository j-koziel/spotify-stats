// place files you want to import through the `$lib` alias in this folder.
import { createClient } from "@supabase/supabase-js"
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public"


export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY)