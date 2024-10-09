import { Typography } from "@mui/material";
import { FC } from "react";
import { IIngredient } from "src/models";

export const Ingredients: FC<{ ingredients: IIngredient[] | undefined }> = ({
  ingredients,
}) => {
  return (
    <div className="flex flex-col gap-[15px]">
      <Typography variant="h2" className="!font-semiBold text-main-darkBg">
        Ingredientes
      </Typography>
      {ingredients && (
        <div className="flex flex-col gap-[5px]">
          {ingredients.map((ing, index) => (
            <Typography
              key={index}
              variant="body1"
              className="text-main-darkBg"
            >
              {`${ing.quantity} ${ing.unit} ${ing.name}`}
            </Typography>
          ))}
        </div>
      )}
    </div>
  );
};
