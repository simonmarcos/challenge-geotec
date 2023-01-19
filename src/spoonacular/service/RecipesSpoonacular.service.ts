import axios from "axios";
import { IRecipesDTO } from "../../models/dto/RecipesDTO";
import {
  IRecipesSpoonacularDTO,
  IRecipesSpoonacularResponseDTO,
} from "../model/RecipesSpoonacular";
import { builApiUrlWithEntity } from "../utils";

export class RecipesSpoonacularService {
  getRecipes = async (size: number): Promise<IRecipesDTO[]> => {
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
