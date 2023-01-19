import { NextFunction, Request, Response } from "express";
import {
  IIngredient,
  ingredientsValidationSchema
} from "../../models/Ingredient";
import { IngredientsService } from "../../service/ingredients.service";

export const validateIfExistIngredientInDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ingredientService = new IngredientsService();
    const response: IIngredient = await ingredientService.findOneByTitle(
      req.body.title
    );

    if (response) {
      throw new Error("The Ingredient already exist in db.");
    }

    next();
  } catch (error) {
    res.status(409).json({ error: "The Ingredient already exist in db." });
  }
};

export const validateIngredientsData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await ingredientsValidationSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).send({ error: "Invalid data" });
  }
};
