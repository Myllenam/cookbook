import { useState, useEffect } from "react";

import { IRecipe, IRecipeParams } from "src/models";
import { api } from "src/services/requests";


export const useGetRecipes = (params: IRecipeParams) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const queryParams = new URLSearchParams(params as any).toString();
        const response = await api.get(`/recipes?${queryParams}`);
        setRecipes(response.data);
      } catch (err: any) {
        setError(err.message);
      }

      setLoading(false);
    };

    fetchRecipes();
  }, [JSON.stringify(params)]);

  return { recipes, loading, error };
};
