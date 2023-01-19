# Recipe App

This is a Node.js application that exposes an API created with Express, Axios, and Mongoose. The API interacts with an external API called Spoonacular to search for recipes and ingredients. It also has a MongoDB database to store recipes and ingredients.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js
- MongoDB
- A Spoonacular API key (https://spoonacular.com/food-api)

## Installing

- Clone the repository
- git clone by ssh: git@github.com:simonmarcos/challenge-geotec.git

## Install the dependencies

- npm install
- Create a .env file in the root of the project and add your Spoonacular API key as **SPOONACULAR_API_KEY=YOUR_API_KEY**
  **SPOONACULAR_API_KEY=URI**

## Start the server

- **npm run dev**
- The server should now be running on http://localhost:3000

## API Endpoints
The following endpoints are available in the API:

- GET /api/recipes/:id/findAll: Retrieve a specific recipes by id
- POST /api/recipes/save: Create a new recipe
- PATCH /api/recipes/:id/partialUpdate: Update a specific recipe by id
- DELETE /api/recipes/:id/delete: Delete a specific recipe by id

- GET /api/ingredients/:id/findAll: Retrieve a specific ingredients by id
- POST /api/ingredients/save: Create a new ingredients
- PATCH /api/ingredients/:id/partialUpdate: Update a specific ingredients by id
- DELETE /api/ingredients/:id/delete: Delete a specific ingredients by id
