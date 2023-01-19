import { PAGINATION_OPTIONS } from "../config/config";
import { IRecipesDTO } from "../models/dto/RecipesDTO";
import { IPaginateResult } from "../models/Paginate";
import { IRecipes, Recipes } from "../models/Recipes";
import { RecipesSpoonacularService } from "../spoonacular/service/RecipesSpoonacular.service";

export class RecipeService {
  findAll = async (limit: number) => {
    const defaultValueLimit: number = limit ? limit : PAGINATION_OPTIONS.limit;

    const recipesResponseFromOurDB: IPaginateResult<IRecipesDTO> =
      await Recipes.paginate(
        {},
        { ...PAGINATION_OPTIONS, limit: defaultValueLimit }
      );

    const numberOfRecipes: number = recipesResponseFromOurDB.totalDocs;

    if (numberOfRecipes < 100) {
      try {
        const recipesSpoonacularService = new RecipesSpoonacularService();
        const recipesReponseFromSpoonacular: IRecipesDTO[] =
          await recipesSpoonacularService.getRecipes(
            defaultValueLimit - numberOfRecipes
          );

        recipesResponseFromOurDB.docs = recipesResponseFromOurDB.docs.concat(
          recipesReponseFromSpoonacular
        );
      } catch (error) {
        console.warn("EASD ", error);
      }
    }

    return { ...recipesResponseFromOurDB, totalDocs: 100 };
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
