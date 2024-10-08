import { EDifficulty } from "../enum";

export interface IRecipeParams {
  id?: number;
  category?: string;
  difficulty?: EDifficulty;
  limit?: number;
  page?: number;
  name?: string;
  prepTime?: number | string;
}
