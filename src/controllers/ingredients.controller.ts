import { Request, Response } from "express";
import { SpoonacularError } from "../exceptions/SpoonacularExceptions";
import { IIngredient, Ingredient } from "../models/Ingredient";
import { IngredientsService } from "../service/ingredients.service";

const ingredientService = new IngredientsService();

export const findAll = async (req: Request, res: Response) => {
  const limit: number = Number(req.query.limit);

  try {
    const ingredientsResponse = await ingredientService.findAll(limit);
    res.json(ingredientsResponse);
  } catch (error) {
    if (error instanceof SpoonacularError) {
      const spoonacularError: SpoonacularError = error as SpoonacularError;
      res.status(spoonacularError.getStatus()).json(spoonacularError.message);
    }
    res.status(500).json("Error");
  }
};

export const save = async (req: Request, res: Response) => {
  try {
    const ingredient: IIngredient = new Ingredient(req.body);
    const ingredientSaved = await ingredientService.save(ingredient);
    res.status(201).json(ingredientSaved);
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
    const ingredientUpdated = await ingredientService.partialupdate(
      req.params.id,
      req.body
    );
    res.status(200).json(ingredientUpdated);
  } catch (error) {
    if (error instanceof Error) {
      const err = error as Error;
      res.status(412).json({ error: err.message });
    } else {
      res.status(500).json("Error");
    }
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  await ingredientService.deleteOne(req.params.id);
  res.status(204).json();
};
