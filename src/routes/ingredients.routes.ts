import { Router } from "express";
const router = Router();

import * as ingredientsController from "../controllers/ingredients.controller";
import {
  validateIfExistIngredientInDB,
  validateIngredientsData,
} from "../middlewares/ingredients/validations.middleware";

router.get("/ingredients/findAll", ingredientsController.findAll);
router.post(
  "/ingredients/save",
  validateIngredientsData,
  validateIfExistIngredientInDB,
  ingredientsController.save
);
router.patch(
  "/ingredients/:id/partialUpdate",
  ingredientsController.partialUpdate
);
router.delete("/ingredients/:id/delete", ingredientsController.deleteOne);

export default router;
