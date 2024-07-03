# Rest API - Songs

This Rest API is a library of songs, it can search by the name of a song, record label or album. 
It's based in a MVC architecture, and it will get more upgrades as I'm studying API's.

## Frameworks used:
- Node.js
- Express.js
- Nodemon
- MongoDB (Database)
- Mongoose

## How the API works?

It's a library of songs, it can create a new song with parameters, update it, delete it and register with a record label.

### /config

Here the connection with the MongoDB is estabilished using Mongoose.

### /controllers

There are two controllers for the API, a song controller and the record controller, and it's exporting the functions to routes.

### /model

Here, the schemas are defined to create the model to use in controllers.

### /routes

Here, the routes are defined based on HTTP methods with functions exported by controllers.
