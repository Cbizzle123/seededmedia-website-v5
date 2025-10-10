/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `email` (text, required) - Contact email address
      - `message` (text, required) - Contact message content
      - `status` (text, default 'unread') - Status of the contact (unread/read/responded)
      - `created_at` (timestamptz) - Timestamp of submission
      
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for inserting contacts (public can submit)
    - Add policy for authenticated users to read contacts
    - Add policy for authenticated users to update status
    
  3. Notes
    - Public users can only insert contact submissions
    - Only authenticated admin users can view and manage contacts
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'unread',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact status"
  ON contacts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);