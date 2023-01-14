import Recipes, { IRecipes } from "../models/Recipes";
import { Request, Response } from "express";

export const findAll = async (req: Request, res: Response) => {
  res.send("ENTROOO");
};

export const save = async (req: Request, res: Response) => {
  const recipe: IRecipes = new Recipes(req.body);

  recipe
    .save()
    .then(() => {
      res.status(201).json({ message: "Recipe was save successful." });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
