import { IPaginateResult } from "../models/Paginate";
import { IRecipes } from "../models/Recipes";

export interface RecipesService {
  findAll(limit: number): Promise<IPaginateResult<IRecipes>>;
  findOneByTitle(title: string): Promise<IRecipes>;
  save(recipe: IRecipes): Promise<IRecipes>;
  partialupdate(recipeId: string, data: IRecipes): Promise<IRecipes>;
  deleteOne(recipeId: string): void;
}
