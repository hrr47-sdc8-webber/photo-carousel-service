DROP DATABASE IF EXISTS sdc
CREATE DATABASE sdc;

\connect sdc;

DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS restaurants;

CREATE TABLE IF NOT EXISTS restaurants (
  id SERIAL PRIMARY KEY,
  restaurantName VARCHAR ( 25 ) NOT NULL
);

CREATE TABLE IF NOT EXISTS images (
  id SERIAL PRIMARY KEY,
  restaurantId integer REFERENCES restaurants (id),
  imageUrl VARCHAR(4)
);