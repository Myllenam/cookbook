import { type FC, type ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";

import theme from "src/styles/theme";

export const AppThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};