import { FC } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";


export const PaginationControlled: FC<{
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}> = ({ page, handleChange }) => {
  return (
    <Box className="bg-primary-200 mt-[60px] p-[10px] rounded-[26px]" component="div">
    <Stack spacing={2}>
      <Pagination count={2} page={page} onChange={handleChange}/>
    </Stack>
    </Box>
  );
};
