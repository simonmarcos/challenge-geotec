require("dotenv").config();

export default {
  DB: {
    URI: process.env.MONGODB_URI || "mongodb://localhost/challenge-geotec",
    USER: process.env.MONGODB_USER || "admin",
    PASSWORD: process.env.MONGODB_PASSWORD || "admin",
  },
  SPOONACULAR: {
    URI: process.env.SPOONACULAR_URI || "https://api.spoonacular.com/",
    API_KEY:
      process.env.SPOONACULAR_API_KEY || "0692bc1101dd4191ba6d8dc1129beb55",
  },
};

export const PAGINATION_OPTIONS = {
  page: 1,
  limit: 100,
};
