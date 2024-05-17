import { toast } from "react-toastify";
import { StateCreator } from "zustand";
import { RecipeAPIResponse } from "../types";

export type FavoritesSliceType = {
  favorites: RecipeAPIResponse[];
  handleClickFavorite: (recipe: RecipeAPIResponse) => void;
  checkRecipe: (id: RecipeAPIResponse["idDrink"]) => boolean;
  loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
  set,
  get
) => ({
  favorites: [],

  handleClickFavorite: (recipe) => {
    if (get().checkRecipe(recipe.idDrink)) {
      set({
        favorites: get().favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      });
      toast.error(`${recipe.strDrink} eliminado. `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.setItem("favorites", JSON.stringify(get().favorites));
    } else {
      set({
        favorites: [...get().favorites, recipe],
      });
      toast.success(`${recipe.strDrink} agregado! `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.setItem("favorites", JSON.stringify(get().favorites));
    }
  },

  checkRecipe: (id: RecipeAPIResponse["idDrink"]) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },

  loadFromStorage: () => {
    const storageFavorites = localStorage.getItem("favorites");
    if (storageFavorites) {
      set({
        favorites: JSON.parse(storageFavorites),
      });
    }
  },
});
