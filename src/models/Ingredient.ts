import { Document, Schema } from "mongoose";

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const yup = require("yup");
export interface IIngredient extends Document {
  id: number;
  name: string;
  image: string;
}

const ingredientsSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

export const ingredientsValidationSchema = yup.object().shape({
  name: yup.string().required(),
  image: yup.string().required(),
});

ingredientsSchema.plugin(mongoosePaginate);

export const Ingredient = mongoose.model("Ingredients", ingredientsSchema);
