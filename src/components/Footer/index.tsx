import { Typography } from "@mui/material";
import { FC } from "react";
import footer from "src/assets/Footer.svg";
import logo from "src/assets/CookBook.png";

export const Footer: FC = () => {
  return (
    <div className="relative w-full">
      <img src={footer} alt="footer" className="w-full h-auto" />
      <footer className="absolute inset-0 flex flex-col items-center ">
        <img src={logo} alt="logo cookbook" className="sm:w-[70px] md:w-[100px] lg:w-[176px]" />
        <div>
          <p>instagram</p>
        </div>
        <Typography variant="body1" className="text-white">
          Todos os direitos reservados
        </Typography>
      </footer>
    </div>
  );
};
