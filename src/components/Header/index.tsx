import { FC, useState } from "react";
import { IconButton, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useLocation } from "react-router-dom";

import "./style.css";
import logo from "src/assets/CookBook.png";
import { DesktopMenu, MenuList, MobileMenu } from "./components";

export const Header: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { pathname } = useLocation();
  const path = pathname.split("/")[1] || "/";
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);

  return (
    <AppBar position="sticky" className=" !bg-primary-300 !bg-opacity-75  p-1">
      <Toolbar>
        <div className="flex items-center sm:justify-between sm:w-full">
          <IconButton
            className="md:!hidden lg:!hidden"
            onClick={toggleMobileMenu}
          >
            <MenuOutlinedIcon className="icon" />
          </IconButton>
          <img src={logo} className="w-[70px] sm:w-[50px] ml-[70px] sm:ml-0" />
        </div>
        <DesktopMenu path={path} />
      </Toolbar>

      <MobileMenu isVisible={showMobileMenu}>
        <MenuList path={path} isMobile={true} onClose={toggleMobileMenu} />
      </MobileMenu>
    </AppBar>
  );
};
