import { NextFunction, Request, Response } from "express";
import { recipesValidationSchema } from "../../models/Recipes";

const validateRecipesData = async (
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

export default validateRecipesData;
