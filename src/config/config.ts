export default {
  JWT_SECRET: process.env.MONGODB_JWT_SECRET || "defaultSecretTokne",
  DB: {
    URI: process.env.MONGODB_URI || "mongodb://localhost/challenge-geotec",
    USER: process.env.MONGODB_USER || "admin",
    PASSWORD: process.env.MONGODB_PASSWORD || "admin",
  },
};

export const PAGINATION_OPTIONS = {
  page: 1,
  limit: 100,
};
