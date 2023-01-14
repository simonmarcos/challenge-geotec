import { model, Schema, Document } from "mongoose";

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

export default model<IRecipes>("Recipes", recipesSchema);