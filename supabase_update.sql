-- Update script for 'contacts' table to add 'service' column
-- This resolves the "Could not find the 'service' column" error

-- 1. Add the 'service' column if it doesn't already exist
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='contacts' AND column_name='service') THEN
        ALTER TABLE public.contacts ADD COLUMN service TEXT DEFAULT 'general';
    END IF;
END $$;

-- 2. Update existing rows if necessary (optional)
-- UPDATE public.contacts SET service = 'general' WHERE service IS NULL;

-- 3. Ensure the column is part of the realtime publication if needed
-- ALTER PUBLICATION supabase_realtime ADD TABLE contacts;

COMMENT ON COLUMN public.contacts.service IS 'The service the user is inquiring about (e.g., website-development, ai-automations)';
