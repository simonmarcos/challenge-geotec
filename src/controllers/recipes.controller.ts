import Recipes, { IRecipes, recipesValidationSchema } from "../models/Recipes";
import { Request, Response } from "express";

export const findAll = async (req: Request, res: Response) => {
  const recipesResponse = await Recipes.find();
  res.json(recipesResponse);
};

export const save = async (req: Request, res: Response) => {
  const recipe: IRecipes = new Recipes(req.body);

  try {
    const recipesSaved = await recipesValidationSchema.validate(recipe.save());
    res.status(201).json(recipesSaved);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
