"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    JWT_SECRET: process.env.MONGODB_JWT_SECRET || "defaultSecretTokne",
    DB: {
        URI: process.env.MONGODB_URI || "mongodb://localhost/geotecTest",
        USER: process.env.MONGODB_USER || "admin",
        PASSWORD: process.env.MONGODB_PASSWORD || "admin",
    },
};
