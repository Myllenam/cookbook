import { FC } from "react";
import { RecipeCard } from "src/components/RecipeCard";
import { IRecipe } from "src/models";

export const Recipes: FC<{ recipes: IRecipe[] }> = ({ recipes }) => {
  return (
    <div className=" w-full flex flex-wrap  justify-center gap-x-7  gap-y-10">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id}/>
      ))}
    </div>
  );
};
