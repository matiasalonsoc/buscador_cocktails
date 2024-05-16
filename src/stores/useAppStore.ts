import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { RecipesSliceType, createRecipeSlice } from "./recipeSlice";

export const useAppStore = create<RecipesSliceType>()(
  devtools(
    // persist(
    (...a) => ({
      ...createRecipeSlice(...a),
    })
    // {
    //   // Local Storage
    //   name: "sesion-storage",
    // }
  )
);
// );
