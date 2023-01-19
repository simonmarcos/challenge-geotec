import axios, { AxiosError } from "axios";
import { SpoonacularError } from "../../exceptions/SpoonacularExceptions";
import { IRecipesSpoonacularResponse } from "../model/RecipesSpoonacular";
import { builApiUrlWithEntity } from "../utils/convertData";

export class RecipesSpoonacularService {
  getRecipes = async (size: number): Promise<IRecipesSpoonacularResponse[]> => {
    try {
      const FINAL_URL = `${builApiUrlWithEntity("recipes")}&number=${size}`;

      const recipesResponse: IRecipesSpoonacularResponse = await axios.get(
        FINAL_URL
      );

      return recipesResponse.data.results;
    } catch (error) {
      if (error instanceof AxiosError) {
        const axiosError: AxiosError = error as AxiosError;
        throw new SpoonacularError(
          axiosError.response?.status!,
          axiosError.message
        );
      }
      throw new Error("Spoonacular API error");
    }
  };
}
