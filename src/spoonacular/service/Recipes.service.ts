import axios from "axios";
import config from "../../config/config";

export class RecipesSpoonacularService {
  API_URL: string = `${config.SPOONACULAR.URI}recipes/apiKey=${config.SPOONACULAR.API_KEY}`;

  getRecipes = async (size: number): Promise<IRecipesSpoonacular[]> => {
    const FINAL_URL = `${this.API_URL}&number=${size}`;
    console.warn("ESAD ", FINAL_URL);
    return await axios.get(FINAL_URL);
  };
}
