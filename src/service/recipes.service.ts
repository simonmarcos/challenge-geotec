import { PAGINATION_OPTIONS } from "../config/config";
import { IRecipesDTO } from "../models/dto/RecipesDTO";
import { IPaginateResult } from "../models/Paginate";
import { IRecipes, Recipes } from "../models/Recipes";
import {
  IRecipesSpoonacularDTO,
  IRecipesSpoonacularResponse,
} from "../spoonacular/model/RecipesSpoonacular";
import { RecipesSpoonacularService } from "../spoonacular/service/RecipesSpoonacular.service";
import { convertListRecipesResponseDataToDTO } from "../spoonacular/utils/convertData";

export class RecipeService {
  findAll = async (limit: number) => {
    const defaultValueLimit: number = limit ? limit : PAGINATION_OPTIONS.limit;

    const recipesResponseFromOurDB: IPaginateResult<IRecipesDTO> =
      await Recipes.paginate(
        {},
        { ...PAGINATION_OPTIONS, limit: defaultValueLimit }
      );

    const numberOfRecipesExisting: number = recipesResponseFromOurDB.totalDocs;

    if (recipesResponseFromOurDB.totalDocs < defaultValueLimit) {
      const recipesResponseDTO: IRecipesSpoonacularDTO[] =
        await this.findRecipesFromSpoonacularService(
          defaultValueLimit - numberOfRecipesExisting
        );

      recipesResponseFromOurDB.docs =
        recipesResponseFromOurDB.docs.concat(recipesResponseDTO);
    }

    return { ...recipesResponseFromOurDB, totalDocs: defaultValueLimit };
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

  private findRecipesFromSpoonacularService = async (
    size: number
  ): Promise<IRecipesSpoonacularDTO[]> => {
    try {
      const recipesSpoonacularService = new RecipesSpoonacularService();

      const recipesReponseFromSpoonacular: IRecipesSpoonacularResponse[] =
        await recipesSpoonacularService.getRecipes(size);

      return convertListRecipesResponseDataToDTO(recipesReponseFromSpoonacular);
    } catch (error) {
      throw new Error("Spoonacular API error");
    }
  };
}
