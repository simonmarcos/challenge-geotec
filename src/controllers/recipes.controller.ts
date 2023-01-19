import { Request, Response } from "express";
import { SpoonacularError } from "../exceptions/SpoonacularExceptions";
import { IRecipes, Recipes } from "../models/Recipes";
import { RecipeServiceImpl } from "../service/impl/RecipesServiceImpl";

const recipeService = new RecipeServiceImpl();

export const findAll = async (req: Request, res: Response) => {
  const limit: number = Number(req.query.limit);

  try {
    const recipesResponse = await recipeService.findAll(limit);
    res.json(recipesResponse);
  } catch (error) {
    if (error instanceof SpoonacularError) {
      const spoonacularError: SpoonacularError = error as SpoonacularError;
      res.status(spoonacularError.getStatus()).json(spoonacularError.message);
    } else {
      res.status(500).json("Error");
    }
  }
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
    if (error instanceof Error) {
      const err = error as Error;
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json("Error");
    }
  }
};

export const save = async (req: Request, res: Response) => {
  try {
    const recipe: IRecipes = new Recipes(req.body);
    const recipesSaved = await recipeService.save(recipe);
    res.status(201).json(recipesSaved);
  } catch (error) {
    if (error instanceof Error) {
      const err = error as Error;
      res.status(412).json({ error: err.message });
    } else {
      res.status(500).json("Error");
    }
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
    if (error instanceof Error) {
      const err = error as Error;
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json("Error");
    }
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  await recipeService.deleteOne(req.params.id);
  res.status(204).json();
};
