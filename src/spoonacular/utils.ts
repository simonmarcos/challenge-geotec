import config from "../config/config";

export const builApiUrlWithEntity = (entity: string) => {
  return `${config.SPOONACULAR.URI}${entity}/complexSearch?apiKey=${config.SPOONACULAR.API_KEY}`;
};
