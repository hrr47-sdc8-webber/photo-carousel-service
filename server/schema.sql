DROP DATABASE IF EXISTS zagat;

CREATE DATABASE zagat;

USE zagat;

CREATE TABLE Restaurants (
  Restaurant_id int NOT NULL AUTO_INCREMENT,
  Restaurant_Name varchar(60) NOT NULL,
  PRIMARY KEY(Restaurant_id)
);

CREATE TABLE Images (
  Image_id int NOT NULL AUTO_INCREMENT,
  Image_url char(12),
  Restaurant_id int,
  PRIMARY KEY(Image_id),
  FOREIGN KEY(Restaurant_id) REFERENCES Restaurants(Restaurant_id)
);