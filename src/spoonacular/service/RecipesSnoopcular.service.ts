import axios from "axios";
import {
  IRecipesSpoonacularDTO,
  IRecipesSpoonacularResponseDTO,
} from "../model/Recipes";
import { builApiUrlWithEntity } from "../utils";

export class RecipesSpoonacularService {
  getRecipes = async (size: number): Promise<IRecipesSpoonacularDTO[]> => {
    try {
      const FINAL_URL = `${builApiUrlWithEntity("recipes")}&number=${size}`;

      const recipesResponse: IRecipesSpoonacularResponseDTO = await axios.get(
        FINAL_URL
      );

      return recipesResponse.data.results;
    } catch (error) {
      throw new Error("Spoonacular API error");
    }
  };
}
