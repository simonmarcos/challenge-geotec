import { Request, Response } from "express";
import Recipes, { IRecipes } from "../models/Recipes";

export const findAll = async (req: Request, res: Response) => {
  const recipesResponse = await Recipes.find();
  res.json(recipesResponse);
};

export const save = async (req: Request, res: Response) => {
  const recipe: IRecipes = new Recipes(req.body);

  try {
    const recipesSaved = await recipe.save();
    res.status(201).json(recipesSaved);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const partialUpdate = async (req: Request, res: Response) => {
  Recipes.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (error, response) => {
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(400).json({ error });
      }
    }
  );
};

export const deleteOne = async (req: Request, res: Response) => {
  await Recipes.findByIdAndRemove(req.params.id);
  res.status(204).json();
};
