/*
  # Update contacts table with name and company fields

  1. Changes
    - Add `name` column (text, required) - Contact person's name
    - Add `company` column (text, optional) - Contact person's company
    
  2. Notes
    - Email and message columns already exist
    - Status and created_at columns remain unchanged
    - RLS policies remain unchanged
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contacts' AND column_name = 'name'
  ) THEN
    ALTER TABLE contacts ADD COLUMN name text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contacts' AND column_name = 'company'
  ) THEN
    ALTER TABLE contacts ADD COLUMN company text;
  END IF;
END $$;