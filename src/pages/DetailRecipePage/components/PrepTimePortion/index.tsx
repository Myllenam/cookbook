import { FC } from "react";
import { Box, Typography } from "@mui/material";

export const PrepTimePortion: FC<{ prepTime: number; servings: number }> = ({
  prepTime,
  servings,
}) => {
  return (
    <div className="flex justify-center pt-[17px] gap-[40px]">
      <div className="flex flex-col items-center justify-center gap-1">
        <Typography variant="body1" className="text-neutral-600">
          Tempo de preparo:
        </Typography>
        <Typography variant="h4" className="text-main-darkBg !font-semiBold">
          {prepTime} min
        </Typography>
      </div>
      <Box component="div" className="h-[60px] w-[1px] bg-neutral-400" />
      <div className="flex flex-col items-center justify-center  gap-1">
        <Typography variant="body1" className="text-neutral-600">
          Porções:
        </Typography>
        <Typography variant="h4" className="text-main-darkBg !font-semiBold">
          {servings}
        </Typography>
      </div>
    </div>
  );
};
