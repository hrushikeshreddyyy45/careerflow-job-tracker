import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY) in .env'
  );
}

/**
 * Browser-side Supabase client singleton.
 * Uses @supabase/ssr for proper cookie-based session handling in the
 * Next.js App Router. Use this in Client Components for auth, database
 * queries, and storage operations.
 */
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);
