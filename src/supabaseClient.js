import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lkwarxakmgebdttwkhmi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrd2FyeGFrbWdlYmR0dHdraG1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MDI3MzMsImV4cCI6MjA5NTI3ODczM30.ph4iwyEghTzKMbmiB4wsNw29vsU-dGXR5NDVBXjArG8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);