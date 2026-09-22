/*
# Create prayer_requests and contact_messages tables

1. New Tables
- `prayer_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — name of the person requesting prayer
  - `email` (text, not null) — email of the person requesting prayer
  - `phone` (text) — optional phone number
  - `request` (text, not null) — the prayer request message
  - `created_at` (timestamptz, default now)
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — name of the person contacting
  - `email` (text, not null) — email of the person contacting
  - `phone` (text) — optional phone number
  - `subject` (text, not null) — subject of the message
  - `message` (text, not null) — the contact message
  - `created_at` (timestamptz, default now)

2. Security
- RLS enabled on both tables.
- Both tables allow anon + authenticated INSERT only (public forms).
- No SELECT/UPDATE/DELETE policies — only the ministry admin (via service role) can read submissions.
*/

CREATE TABLE IF NOT EXISTS prayer_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  request text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE prayer_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_prayer_requests" ON prayer_requests;
CREATE POLICY "anon_insert_prayer_requests" ON prayer_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);
