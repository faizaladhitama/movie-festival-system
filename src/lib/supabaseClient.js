import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://iybvupnxwdbsmhgjqynz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5YnZ1cG54d2Ric21oZ2pxeW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4NDU3MTIsImV4cCI6MjAwNzQyMTcxMn0.8fyx2GWVM4VgSVD6gVT9jBGZaGHyrt_wQTLwfi987tk')