import { createClient } from '@supabase/supabase-js'
import { environment } from 'src/environments/environment'


// Create a single supabase client for interacting with your database
export const supabase = createClient(
  environment.SUPA_BASE.supaBaseUrl,
   environment.SUPA_BASE.subaseApiKey)
