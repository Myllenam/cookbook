import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import "./style.css";
import { IRecipe } from "src/models";

export const RecipeCard: FC<{ recipe: IRecipe }> = ({ recipe }) => {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/receitas/${recipe.id}`);
  };

  return (
    <Card
      className="card cursor-pointer hover:bg-primary-200"
      variant="outlined"
      onClick={goToDetailPage}
    >
      <CardMedia
        className="h-[160px]"
        image={recipe.image}
        title={recipe.title}
      />

      <Typography
        variant="h3"
        component="div"
        className="!font-semiBold text-main-darkBg text-center p-[8px]"
      >
        {recipe.title}
      </Typography>
      <CardContent>
        <div className="flex flex-col gap-[5px] pb-[10px]">
          <Typography variant="h4" className="text-main-darkBg">
            {recipe.category}
          </Typography>
          <Typography variant="h4" className="text-main-darkBg">
            Dificuldade: {recipe.difficulty}
          </Typography>
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="flex gap-[15px] items-center">
            <AccessTimeIcon className="text-secondary-400" />
            <Typography variant="body1" className="text-main-darkBg">
              {recipe.preparationTime} min
            </Typography>
          </div>
          <div className="flex gap-[15px] items-center">
            <FavoriteIcon className="text-main-primary" />
            <Typography variant="body1" className="text-main-darkBg">
              323 curtidas
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
