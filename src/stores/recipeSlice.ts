import { StateCreator } from "zustand";
import { getCategories, getDrink, getRecipes } from "../services/RecipeService";
import {
  CategoriesAPIResponse,
  InfoFilter,
  InfoFilterArray,
  RecipeAPIResponse,
  SearchFilter,
} from "../types";

export type RecipesSliceType = {
  categories: CategoriesAPIResponse;
  recipes: InfoFilterArray;
  cocktailInfo: RecipeAPIResponse;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
  selectRecipe: (id: InfoFilter["idDrink"]) => Promise<void>;
  closeModal: () => void;
};

export const createRecipeSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },

  recipes: {
    drinks: [],
  },

  cocktailInfo: {} as RecipeAPIResponse,

  modal: false,

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

  selectRecipe: async (id) => {
    const myRec = await getDrink(id);
    set({
      cocktailInfo: myRec,
      modal: true,
    });
  },

  closeModal: () => {
    set({
      modal: false,
      cocktailInfo: {} as RecipeAPIResponse,
    });
  },
});
