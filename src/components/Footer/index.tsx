import { FC } from "react";
import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

import "./style.css"
import footer from "src/assets/Footer.svg";
import logo from "src/assets/CookBook.png";

export const Footer: FC = () => {
  return (
    <div className="relative w-full">
      <img src={footer} alt="footer" className="w-full h-auto" />
      <footer className="absolute inset-0 flex flex-col items-center justify-between">
      
        <img
          src={logo}
          alt="logo cookbook"
          className="sm:w-[70px] md:w-[100px] lg:w-[176px] mt-[10px] lg:mt-[30px]"
        />
       
        <div className="h-full w-full flex flex-col items-center justify-around bg-main-primary">
          <div className="flex gap-[10px] lg:gap-[20px] ">
            <InstagramIcon className="icon" />
            <XIcon className="icon"/>
            <WhatsAppIcon className="icon"/>
            <FacebookIcon className="icon"/>
          </div>
          <Typography variant="body1" className="text-white">
            Todos os direitos reservados
          </Typography>
        </div>
      </footer>
    </div>
  );
};
