import Recipes, { IRecipes } from "../models/Recipes";

export const findAll = async (req: any, res: any) => {
  res.send("ENTROOO");
};

export const save = async (req: any, res: any) => {
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
