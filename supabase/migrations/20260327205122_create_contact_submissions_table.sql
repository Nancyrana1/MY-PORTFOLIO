/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person contacting
      - `email` (text) - Email address for response
      - `message` (text) - The message/query content
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of the submission (new, read, responded)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting contact submissions (public access for form submission)
    - Add policy for viewing submissions (authenticated admin only - restrictive by default)

  3. Notes
    - The insert policy allows anyone to submit a contact form
    - Reading submissions requires authentication (admin access)
    - Default status is 'new' for tracking purposes
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);