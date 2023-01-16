import { PAGINATION_OPTIONS } from "../config/config";
import { IRecipes, Recipes } from "../models/Recipes";

export class RecipeService {
  findAll = async (page: number = 1): Promise<IRecipes[]> => {
    return await Recipes.paginate({}, { ...PAGINATION_OPTIONS, page });
  };

  findOneByTitle = async (title: string = ""): Promise<IRecipes> => {
    return await Recipes.findOne({
      title: title,
    });
  };

  save = async (recipe: IRecipes) => {
    return await recipe.save();
  };

  partialupdate = async (recipeId: string, data: IRecipes) => {
    return await Recipes.findByIdAndUpdate({ _id: recipeId }, data, {
      new: true,
    });
  };

  deleteOne = async (recipeId: string) => {
    await Recipes.findByIdAndRemove(recipeId);
  };
}
