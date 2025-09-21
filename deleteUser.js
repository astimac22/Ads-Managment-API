import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ymatshphzcnvwiswexul.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltYXRzaHBoemNudndpc3dleHVsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODEwNzU3OCwiZXhwIjoyMDczNjgzNTc4fQ.0eWfoirSObECMrpnc5BYgbv6bVGXHd_0UCBsX-zQEjA"
);

const { data, error } = await supabase.auth.admin.deleteUser(
  "d630ec1d-c72a-4d09-9c75-bf95837af6f5"
);

if (error) console.error("Failed to delete user:", error);
else console.log("✅ User deleted:", data);
