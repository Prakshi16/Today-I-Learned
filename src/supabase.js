import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xebnvvxgpbecmjkxjzal.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYm52dnhncGJlY21qa3hqemFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5OTE5NDQsImV4cCI6MjA2ODU2Nzk0NH0.DFlGvOQXP_Ls-xND_0LaLJ0ptaBLF7QKLh0tueR-IRk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
