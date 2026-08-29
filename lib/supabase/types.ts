import type { Database } from '@/lib/database.types';

/**
 * Re-export the typed Supabase client for convenience.
 *
 * Once you generate database types (via the Supabase MCP or CLI),
 * import `SupabaseClient` from here to get full type-safety on all
 * your queries.
 */
export type TypedSupabaseClient = import('@supabase/supabase-js').SupabaseClient<Database>;
