import { Router } from "express";
const router = Router();

import * as recipesController from "../controllers/recipes.controller";
import {
  validateIfExistParamTitle, validateRecipesData
} from "../middlewares/recipes/validations.middleware";

router.get("/recipes/findAll", recipesController.findAll);
router.get(
  "/recipes/findByTitle",
  validateIfExistParamTitle,
  recipesController.findOneByTitle
);
router.post("/recipes/save", validateRecipesData, recipesController.save);
router.patch("/recipes/:id/partialUpdate", recipesController.partialUpdate);
router.delete("/recipes/:id/delete", recipesController.deleteOne);

export default router;
