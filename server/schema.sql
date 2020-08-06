DROP DATABASE IF EXISTS zagat;

CREATE DATABASE zagat;

USE zagat;

CREATE TABLE Restaurants (
  id int NOT NULL AUTO_INCREMENT,
  Restaurant_Name varchar(30) NOT NULL,
  PRIMARY KEY(Restaurant_id)
);

CREATE TABLE Photos (
  id int NOT NULL AUTO_INCREMENT,
  img_url char(12), --image URL will only contain the unique identifier. example: 'img0000.jpeg'
  Restaurant_id int,
  PRIMARY KEY(id),
  FOREIGN KEY(Restaurant_id) REFERENCES Restaurants(id)
);