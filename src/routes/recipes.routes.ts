import { Router } from "express";
import Recipes, { IRecipes } from "../models/Recipes";

const router = Router();

router.post("/recipes", (req, res) => {
  const recipe: IRecipes = new Recipes(req.body);

  recipe
    .save()
    .then(() => {
      res.status(201).json({ message: "Recipe was save successful." });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

export default router;
