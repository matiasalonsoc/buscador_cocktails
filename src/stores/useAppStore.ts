import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice";
import { RecipesSliceType, createRecipeSlice } from "./recipeSlice";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(
  devtools(
    // persist(
    (...a) => ({
      ...createRecipeSlice(...a),
      ...createFavoritesSlice(...a),
    })
    // {
    //   // Local Storage
    //   name: "sesion-storage",
    // }
  )
);
// );
