import { IIngredient } from "../models/Ingredient";
import { IPaginateResult } from "../models/Paginate";

export interface IngredientsService {
  findAll(limit: number): Promise<IPaginateResult<IIngredient>>;
  findOneByTitle(name: string): Promise<IIngredient>;
  save(ingredient: IIngredient): Promise<IIngredient>;
  partialupdate(ingredientId: string, data: IIngredient): Promise<IIngredient>;
  deleteOne(ingredientId: string): void;
}
