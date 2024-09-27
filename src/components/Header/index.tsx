import { FC } from "react";
import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

import logo from "src/assets/CookBook.png";

export const Header:FC = () => {
  return (
    <AppBar
      position="sticky"
      className=" !bg-primary-300 h-[75px] !bg-opacity-75 sm:h-[50px] "
    >
      <Toolbar>
        <img src={logo} className="w-[80px] ml-[70px] sm:w-[50px] sm:ml-0" />
        <div className="flex items-center gap-[60px] sm:hidden pl-[60px]">
          <Typography variant="h2" className="!font-extraBold text-main-darkBg">
            Home
          </Typography>
          <Typography variant="h2" className="!font-semiBold text-main-darkBg">
            Receitas
          </Typography>
          <Typography variant="h2" className="!font-semiBold text-main-darkBg">
            Adicionar Receita
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
