import { useState, useEffect } from "react";
import { IRecipeDetails } from "src/models";
import { api } from "src/services/requests";

export const useGetRecipeDetails = (id: string) => {
  const [recipeDetails, setRecipeDetails] = useState<IRecipeDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get(`/recipes/${id}`);
        setRecipeDetails(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [id]);

  return { recipeDetails, loading, error };
};
