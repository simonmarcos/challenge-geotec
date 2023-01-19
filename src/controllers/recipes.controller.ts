import { Request, Response } from "express";
import { IRecipes, Recipes } from "../models/Recipes";
import { RecipeService } from "../service/recipes.service";

const recipeService = new RecipeService();

export const findAll = async (req: Request, res: Response) => {
  const limit: number = Number(req.query.limit);

  const recipesResponse = await recipeService.findAll(limit);
  res.json(recipesResponse);
};

export const findOneByTitle = async (req: Request, res: Response) => {
  try {
    const title: string = String(req.query.title);
    const recipeResponse: IRecipes = await recipeService.findOneByTitle(title);

    if (recipeResponse) {
      res.status(200).json(recipeResponse);
    } else {
      res.status(204).json();
    }

    return recipeResponse;
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const save = async (req: Request, res: Response) => {
  try {
    const recipe: IRecipes = new Recipes(req.body);
    const recipesSaved = await recipeService.save(recipe);
    res.status(201).json(recipesSaved);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const partialUpdate = async (req: Request, res: Response) => {
  try {
    const recipesUpdated = await recipeService.partialupdate(
      req.params.id,
      req.body
    );
    res.status(200).json(recipesUpdated);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  await recipeService.deleteOne(req.params.id);
  res.status(204).json();
};
