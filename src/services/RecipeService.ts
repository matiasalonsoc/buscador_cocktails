import axios from "axios";
import { SearchFilter } from "../types";
import {
  CategoriesAPIResponseSchema,
  InfoFilterArraySchema,
} from "../utils/recipe-schemas";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

  const { data } = await axios(url);

  const result = CategoriesAPIResponseSchema.safeParse(data);

  if (result.success) {
    return result.data;
  }
}

export const getRecipes = async (searchFilters: SearchFilter) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilters.category}&i=${searchFilters.ingredient}`;

  const { data } = await axios(url);
  const result = InfoFilterArraySchema.safeParse(data);

  if (result.success) {
    return result.data;
  }
};
