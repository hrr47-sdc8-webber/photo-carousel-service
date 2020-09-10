DROP DATABASE IF EXISTS "sdcPhotoCarousel";
CREATE DATABASE "sdcPhotoCarousel";

\connect "sdcPhotoCarousel";

DROP TABLE IF EXISTS images_by_restaurant;

CREATE TABLE images_by_restaurant (
  id SERIAL PRIMARY KEY,
  restaurantName VARCHAR ( 25 ) NOT NULL,
  imageUrl VARCHAR( 50 ) NOT NULL
);
