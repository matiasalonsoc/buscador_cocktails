import { StateCreator } from "zustand";
import { getCategories, getRecipes } from "../services/RecipeService";
import { CategoriesAPIResponse, InfoFilterArray, SearchFilter } from "../types";

export type RecipesSliceType = {
  categories: CategoriesAPIResponse;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
  recipes: InfoFilterArray;
};

export const createRecipeSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },

  recipes: {
    drinks: [],
  },

  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },

  searchRecipes: async (searchFilters) => {
    const recipes = await getRecipes(searchFilters);
    set({
      recipes,
    });
  },
});
