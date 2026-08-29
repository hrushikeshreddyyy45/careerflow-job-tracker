/**
 * Database type definitions for CareerFlow.
 *
 * This file defines the TypeScript types that mirror the Supabase
 * database schema. Once the actual tables are created via migrations,
 * you can regenerate this file with the Supabase CLI:
 *
 *   npx supabase gen types typescript --project-id <project-ref> > lib/database.types.ts
 *
 * For now, this serves as the placeholder so typed Supabase clients
 * compile correctly. Replace `any` with concrete table types after
 * the schema is created.
 */

export interface Database {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
