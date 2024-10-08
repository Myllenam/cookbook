import { FC } from "react";
import { Typography } from "@mui/material";


export const Component: FC = () => {
  return (
    <div  className=" max-w-full flex flex-col items-center p-[20px]">
      <Typography variant="h1" className="!font-extraBold text-main-primary">
        Teste mui
      </Typography>
      <h1 className="font-extralight text-main-primary">Teste</h1>
  
    </div>
  );
};
