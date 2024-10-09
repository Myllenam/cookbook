import { Typography } from "@mui/material";
import { FC } from "react";
import { IInstruction } from "src/models";

export const Instructions: FC<{ instructions: IInstruction[]|undefined }> = ({
  instructions,
}) => {
  return (
    <div className="flex flex-col gap-6  bg-white rounded-lg ">
      <Typography variant="h2" className="text-main-darkBg !font-semiBold">
        Modo de Preparo:
      </Typography>
      <div className="flex flex-col gap-2 ">
        {instructions?.map((instruction) => (
          <div key={instruction.order} className="flex items-start gap-2 !max-w-[620px]">
            <div className="flex items-center justify-center bg-red-300 p-[15px] text-white rounded-full w-6 h-6">
              <Typography component="span" variant="body1">{instruction.order}</Typography>
            </div>
            <Typography variant="body1" className="text-main-darkBg">
              {instruction.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
