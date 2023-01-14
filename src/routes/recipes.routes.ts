import { Router } from "express";
const router = Router();

import * as recipesController from "../controllers/recipes.controller";
import validateRecipesData from "../middlewares/recipes/validateRecipesData.middleware";

router.get("/recipes/findAll", recipesController.findAll);
router.post("/recipes/save", validateRecipesData, recipesController.save);
router.delete("/recipes/:id/delete", recipesController.deleteOne);

export default router;
