import { Request, Response, NextFunction } from "express";

const validateExistRecipe = (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const { title } = req.body;
};

export default validateExistRecipe;
