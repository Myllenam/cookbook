import { FC } from "react";
import { menuItems } from "../../utils";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

export const MenuList: FC<{ path: string; isMobile?: boolean, onClose?:()=>void }> = ({
  path,
  isMobile,
  onClose
}) => {
  return (
    <>
      {menuItems.map((item, index) => (
        <NavLink key={index} to={item.path} onClick={onClose}>
          <Typography
            variant={isMobile?"h3":"h2"}
            className={`${
              path === item.path ? "!font-extraBold" : "!font-semiBold"
            } text-main-darkBg`}
          >
            {item.text}
          </Typography>
        </NavLink>
      ))}
    </>
  );
};
