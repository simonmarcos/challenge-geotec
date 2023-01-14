"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const recipesSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        unique: true,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
});
exports.default = (0, mongoose_1.model)("Recipes", recipesSchema);
