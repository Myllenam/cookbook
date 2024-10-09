import { EDifficulty } from "../enum";

export interface IRecipe {
    id: number;
    title: string;
    image: string;
    preparationTime: number;
    category: string;
    difficulty: EDifficulty;
  }
  export interface IRecipeResponse {
    items:IRecipe[];
    totalPages?: number
  }