import { Document, model, Schema } from "mongoose";

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const yup = require("yup");
export interface IRecipes extends Document {
  title: string;
  image: string;
}

const recipesSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

export const recipesValidationSchema = yup.object().shape({
  title: yup.string().required(),
  image: yup.string().required(),
});

recipesSchema.plugin(mongoosePaginate);

export const Recipes = mongoose.model("Recipes", recipesSchema);
