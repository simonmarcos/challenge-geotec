import { model, Schema, Document } from "mongoose";

export interface IIngredient extends Document {
  id: number;
  title: string;
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

export default model<IIngredient>("Ingredient", ingredientsSchema);
