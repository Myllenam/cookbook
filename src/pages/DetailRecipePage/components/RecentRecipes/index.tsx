import { FC } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { mockRecipes } from "../../utils";
import { Typography } from "@mui/material";

export const RecentRecipes: FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Typography variant="h3" className="!font-semiBold text-main-darkBg pl-4">
        Receitas recentes
      </Typography>
      {mockRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className="flex p-4 bg-white  rounded-lg  hover:bg-primary-200"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-40 w-40 object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between ml-4">
            <div>
              <h2 className="text-lg font-bold text-main-darkBg">
                {recipe.title}
              </h2>
              <p className="text-main-darkBg">{recipe.category}</p>
              <p className="text-main-darkBg">
                Dificuldade: {recipe.difficulty}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <AccessTimeIcon className="text-secondary-400" />
                <span className="text-main-darkBg">
                  {recipe.preparationTime} min
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FavoriteIcon className="text-main-primary" />
                <span className="text-main-darkBg">
                  {recipe.likes} curtidas
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
