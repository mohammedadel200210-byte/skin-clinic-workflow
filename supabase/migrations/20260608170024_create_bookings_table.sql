CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text NOT NULL,
  preferred_date date,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_bookings" ON bookings
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "select_own_bookings" ON bookings
  FOR SELECT TO authenticated
  USING (true);
