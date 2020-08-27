# Zigat Photo Carousel Module

> This is a system design capstone project to build a production level backend for a Zagat clone called Zigat.

## Related Projects

  - https://github.com/hrr47-sdc8-webber/info-sidebar-service
  - https://github.com/hrr47-sdc8-webber/tips-recommendations-service
  - https://github.com/hrr47-sdc8-webber/similar-restaurants-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Using this photo carousel module you can go to multiple id endpoints explained down below and see different rendered images based on the restaurant chosen (based on the endpoint in the URL)

#### CRUD API Commands

##### 'C'reate
The legacy server code currently supports POST requests givin by the endpoint ```/api/photos``` which conforms to REST standard naming.  The server expects a JSON object with two properties: key 'name' with a value type string for the restaurant name, and key 'images' with a value type array which holds the suffix URL to the images hosted on S3, e.g. 'img0002.jpeg'

##### 'R'ead
The legacy server code currently supports GET requests givin by the endpoint ```/api/photos/:restaurantID``` which conforms to REST standard naming.  The server expects no data passed along to the server, besides going to an applicable endpoint (listed down below in the [Getting Started](#Getting Started) section)

##### 'U'pdate
The legacy server code currently supports PUT requests givin by the endpoint ```/api/photos/:restaurantID``` which conforms to REST standard naming.  The server expects a JSON object with two properties: key 'Image_id' with a value type number for the Image_id, and key 'Image' with a value type string which represents the suffix URL to the images hosted on S3, e.g. 'img0002.jpeg'

##### 'D'elete
The legacy server code currently supports DELETE requests givin by the endpoint ```/api/photos/:restaurantID``` which conforms to REST standard naming.  The server expects a JSON object with one property: key 'id' with a value type number for the 'Restaurant_id' that points to the listing which will be removed.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

#### Dependencies
    "body-parser": "^1.19.0",
    "bootstrap": "^4.5.2",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "faker": "^4.1.0",
    "jquery": "^3.5.1",
    "mysql": "^2.18.1",
    "nodemon": "^2.0.4",
    "path": "^0.12.7",
    "prop-types": "^15.7.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "styled-components": "^5.1.1",
    "webpack": "^4.44.1"

#### Dev Dependencies
    "@babel/core": "^7.10.5",
    "@babel/preset-env": "^7.10.4",
    "@babel/preset-react": "^7.10.4",
    "babel": "^6.23.0",
    "babel-loader": "^8.1.0",
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.3",
    "eslint": "^7.6.0",
    "eslint-config-airbnb": "^18.2.0",
    "eslint-config-airbnb-base": "^14.2.0",
    "eslint-config-hackreactor": "git://github.com/reactorcore/eslint-config-hackreactor",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-react": "^7.20.5",
    "eslint-plugin-react-hooks": "^4.0.8",
    "jest": "^26.4.2",
    "webpack": "^4.44.0",
    "webpack-cli": "^3.3.12"

## Development

#### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
This will install all necessary dependencies.

#### Getting Started

The first and foremost task is to get mysql downloaded, up and running.  After that, you should update your database login information in ```server/database/database.js```.

Next step is to run the schema.sql by using ```npm run schema``` which will destroy and recreate the database schema from scratch (whcih is fine for this project.) Then, run the seeding script ```npm run seed```. This will seed the database with mock data that can be viewed by going to endpoints of id 1-100 (explained later.)

The next step is to use two terminals to start the webpack build (manual, not watched) and the server
```
npm run build
npm run start
```
Following that, you can open up a browser and go to http://localhost:3001/(:id) where (:id) represents an id referencing a mock listing from the database.  You may use the numbers 1-100 for the id value.

#### Testing

Finally, to test the program you can run the following tests after code changes.  
```npm run test```  
