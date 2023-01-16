import { NextFunction, Request, Response } from "express";
import {
  Recipes,
  IRecipes,
  recipesValidationSchema,
} from "../../models/Recipes";

const yup = require("yup");

export const validateIfExistRecipeInDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: IRecipes | null = await Recipes.findOne({
      title: req.body.title,
    });

    if (response) {
      throw new Error("The Recipe already exist in db.");
    }

    next();
  } catch (error) {
    res.status(409).json({ error: "The Recipe already exist in db." });
  }
};

export const validateRecipesData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await recipesValidationSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).send({ error: "Invalid data" });
  }
};

export const validateIfExistParamTitle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = yup.object().shape({
      title: yup.string().notOneOf([null, "", undefined]),
    });

    await schema.validate(req.query.title);
    next();
  } catch (error) {
    res.status(400).send({ error: "Params Title is required." });
  }
};
