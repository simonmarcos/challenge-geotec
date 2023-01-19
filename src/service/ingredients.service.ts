import { PAGINATION_OPTIONS } from "../config/config";
import { IIngredient, Ingredient } from "../models/Ingredient";

export class IngredientsService {
  findAll = async (limit: number) => {
    const defaultValueLimit: number = limit ? limit : PAGINATION_OPTIONS.limit;

    return await Ingredient.paginate(
      {},
      { ...PAGINATION_OPTIONS, limit: defaultValueLimit }
    );
  };

  findOneByTitle = async (name: string = ""): Promise<IIngredient> => {
    return await Ingredient.findOne({
      name: name,
    });
  };

  save = async (ingredient: IIngredient) => {
    const ingredientsByTitleResponse = await this.findOneByTitle(
      ingredient.name
    );
    if (ingredientsByTitleResponse) {
      throw new Error("The Ingredient already exist in db.");
    }

    return await ingredient.save();
  };

  partialupdate = async (ingredientId: string, data: IIngredient) => {
    return await Ingredient.findByIdAndUpdate({ _id: ingredientId }, data, {
      new: true,
    });
  };

  deleteOne = async (ingredientId: string) => {
    await Ingredient.findByIdAndRemove(ingredientId);
  };
}
