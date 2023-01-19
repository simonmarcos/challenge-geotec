import { PAGINATION_OPTIONS } from "../config/config";
import { IPaginateResult } from "../models/Paginate";
import { IRecipes, Recipes } from "../models/Recipes";
import { IRecipesSpoonacular } from "../spoonacular/model/Recipes";
import { RecipesSpoonacularService } from "../spoonacular/service/RecipesSnoopcular.service";

export class RecipeService {
  findAll = async (limit: number) => {
    const finalResponse = [];

    const defaultValueLimit: number = limit ? limit : PAGINATION_OPTIONS.limit;

    const recipesResponseFromOurDB: IPaginateResult<IRecipes> =
      await Recipes.paginate(
        {},
        { ...PAGINATION_OPTIONS, limit: defaultValueLimit }
      );

    finalResponse.push(recipesResponseFromOurDB.docs);
    const numberOfRecipes: number = recipesResponseFromOurDB.totalDocs;

    if (numberOfRecipes < 100) {
      try {
        const recipesSpoonacularService = new RecipesSpoonacularService();
        const recipesSpoonacularReponse: IRecipesSpoonacular[] =
          await recipesSpoonacularService.getRecipes(
            defaultValueLimit - numberOfRecipes
          );
        console.warn("ESS ", recipesSpoonacularReponse);
        finalResponse.push(recipesSpoonacularReponse);
      } catch (error) {
        console.warn("EASD ", error);
      }
    }

    return finalResponse;
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
