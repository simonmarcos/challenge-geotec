# Recipe App
This is a Node.js application that exposes an API created with Express, Axios, and Mongoose. The API interacts with an external API called Spoonacular to search for recipes and ingredients. It also has a MongoDB database to store recipes and ingredients.

##Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

##Prerequisites
* Node.js
* MongoDB
* A Spoonacular API key (https://spoonacular.com/food-api)

##Installing
* Clone the repository
* git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

## Install the dependencies
* npm install
* Create a .env file in the root of the project and add your Spoonacular API key as **SPOONACULAR_API_KEY=YOUR_API_KEY**
**SPOONACULAR_API_KEY=URI**

##Start the server

* **npm start**
* The server should now be running on http://localhost:3000

##API Endpoints
The following endpoints are available in the API:

* GET /recipes: Retrieve a list of recipes
* GET /recipes/:id: Retrieve a specific recipe by id
* POST /recipes: Create a new recipe
* PUT /recipes/:id: Update a specific recipe by id
* DELETE /recipes/:id: Delete a specific recipe by id