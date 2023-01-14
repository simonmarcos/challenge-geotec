import { model, Schema, Document } from "mongoose";
const yup = require("yup");

export interface IRecipes extends Document {
  id: number;
  title: string;
  image: string;
}

const recipesSchema = new Schema({
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

export const recipesValidationSchema = yup.object().shape({
  title: yup.string().required(),
  image: yup.string().required(),
});

export default model<IRecipes>("Recipes", recipesSchema);
