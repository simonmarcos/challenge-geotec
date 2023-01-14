import { NextFunction, Request, Response } from "express";
import { recipesValidationSchema } from "../../models/Recipes";

const yup = require("yup");

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
    console.warn("ENTRO AQUI ", error);
    res.status(400).send({ error: "Params Title is required." });
  }
};
