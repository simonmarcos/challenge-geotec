import {
  IRecipesSpoonacularDTO,
  IRecipesSpoonacularResponse,
} from "../model/RecipesSpoonacular";

export const convertRecipesResponseDataToDTO = (
  responseData: IRecipesSpoonacularResponse
): IRecipesSpoonacularDTO => {
  return {
    _id: responseData.id,
    title: responseData.title,
    image: responseData.image,
    imageType: responseData.imageType,
  };
};

export const convertListRecipesResponseDataToDTO = (
  responseData: IRecipesSpoonacularResponse[]
): IRecipesSpoonacularDTO[] => {
  return responseData.map((data) => convertRecipesResponseDataToDTO(data));
};
