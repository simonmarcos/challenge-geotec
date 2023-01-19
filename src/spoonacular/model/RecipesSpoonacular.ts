export interface IRecipesSpoonacularResponse {
  data: IRecipesSpoonacularDataResponse;
  offset: number;
  number: number;
  totalResults: number;
}
interface IRecipesSpoonacularDataResponse {
  results: IRecipesSpoonacularResponse[];
}
export interface IRecipesSpoonacularResponse {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface IRecipesSpoonacularDTO {
  _id: number;
  title: string;
  image: string;
  imageType: string;
}
