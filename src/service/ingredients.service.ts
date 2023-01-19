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

  findOneByTitle = async (title: string = ""): Promise<IIngredient> => {
    return await Ingredient.findOne({
      title: title,
    });
  };

  save = async (Ingredient: IIngredient) => {
    return await Ingredient.save();
  };

  partialupdate = async (IngredientId: string, data: IIngredient) => {
    return await Ingredient.findByIdAndUpdate({ _id: IngredientId }, data, {
      new: true,
    });
  };

  deleteOne = async (IngredientId: string) => {
    await Ingredient.findByIdAndRemove(IngredientId);
  };
}
