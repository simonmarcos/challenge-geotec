export interface IIngredientsSpoonacularResponse {
  data: IIngredientsSpoonacularDataResponse;
  offset: number;
  number: number;
  totalResults: number;
}
interface IIngredientsSpoonacularDataResponse {
  results: IIngredientsSpoonacularResponse[];
}
export interface IIngredientsSpoonacularResponse {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface IIngredientsSpoonacularDTO {
  _id: number;
  title: string;
  image: string;
  imageType: string;
}
