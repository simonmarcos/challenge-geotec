export interface IRecipesSpoonacularResponse {
  data: IRecipesSpoonacularData;
  offset: number;
  number: number;
  totalResults: number;
}
interface IRecipesSpoonacularData {
  results: IRecipesSpoonacular[];
}
export interface IRecipesSpoonacular {
  _id: number;
  title: string;
  image: string;
}
