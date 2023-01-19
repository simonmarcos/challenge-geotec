export interface IRecipesSpoonacularResponseDTO {
  data: IRecipesSpoonacularDataDTO;
  offset: number;
  number: number;
  totalResults: number;
}
interface IRecipesSpoonacularDataDTO {
  results: IRecipesSpoonacularDTO[];
}
export interface IRecipesSpoonacularDTO {
  _id: number;
  title: string;
  image: string;
}
