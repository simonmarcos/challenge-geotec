import { NextFunction, Request, Response } from "express";
import { ingredientsValidationSchema } from "../../models/Ingredient";

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
