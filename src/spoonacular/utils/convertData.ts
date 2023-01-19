import config from "../../config/config";
import {
  IIngredientsSpoonacularDTO,
  IIngredientsSpoonacularResponse,
} from "../model/IngredientsSpoonacular";

export const builApiUrlWithEntity = (entity: string) => {
  return `${config.SPOONACULAR.URI}${entity}/complexSearch?apiKey=${config.SPOONACULAR.API_KEY}`;
};

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

export const convertIngredientsResponseDataToDTO = (
  responseData: IIngredientsSpoonacularResponse
): IIngredientsSpoonacularDTO => {
  return {
    _id: responseData.id,
    title: responseData.title,
    image: responseData.image,
    imageType: responseData.imageType,
  };
};

export const convertListIngredientsResponseDataToDTO = (
  responseData: IIngredientsSpoonacularResponse[]
): IIngredientsSpoonacularDTO[] => {
  return responseData.map((data) => convertRecipesResponseDataToDTO(data));
};
