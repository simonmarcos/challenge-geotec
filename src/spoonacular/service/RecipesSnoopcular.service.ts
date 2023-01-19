import axios from "axios";
import {
  IRecipesSpoonacular,
  IRecipesSpoonacularResponse,
} from "../model/Recipes";
import { builApiUrlWithEntity } from "../utils";

export class RecipesSpoonacularService {
  getRecipes = async (size: number): Promise<IRecipesSpoonacular[]> => {
    try {
      const FINAL_URL = `${builApiUrlWithEntity("recipes")}&number=${size}`;

      const recipesResponse: IRecipesSpoonacularResponse = await axios.get(
        FINAL_URL
      );

      return recipesResponse.data.results;
    } catch (error) {
      throw new Error("Spoonacular API error");
    }
  };
}
