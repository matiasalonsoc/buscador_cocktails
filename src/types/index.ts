import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  InfoFilterArraySchema,
  RecipeAPIResponseSchema,
  SearchFilterSchema,
  infoFilterObjSchema,
} from "../utils/recipe-schemas";

export type CategoriesAPIResponse = z.infer<typeof CategoriesAPIResponseSchema>;

export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type InfoFilterArray = z.infer<typeof InfoFilterArraySchema>;
export type InfoFilter = z.infer<typeof infoFilterObjSchema>;
export type RecipeAPIResponse = z.infer<typeof RecipeAPIResponseSchema>;
