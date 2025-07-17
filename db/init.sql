DROP TABLE IF EXISTS house_entity;

CREATE TABLE IF NOT EXISTS house_entity (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  photo TEXT NOT NULL,
  available_units INT NOT NULL,
  wifi BOOLEAN NOT NULL,
  laundry BOOLEAN NOT NULL
);
