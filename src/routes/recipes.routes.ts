import { Router } from "express";
const router = Router();

import * as recipesController from "../controllers/recipes.controller";

router.get("/recipes/findAll", recipesController.findAll);
router.post("/recipes/save", recipesController.save);

export default router;
