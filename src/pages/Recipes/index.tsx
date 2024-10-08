import { FC, useState } from "react";
import { Typography } from "@mui/material";

import { Recipes } from "./components/Recipes";
import { Filters } from "./components/Filters";
import { useGetRecipes } from "src/hooks/useGetRecipes";
import { PaginationControlled } from "./components/Pagination";
import { IRecipeParams } from "src/models";

export const Component: FC = () => {
  const [page, setPage] = useState(1);
  const [params, setParams] = useState<IRecipeParams | null>(null);
  const { error, loading, recipes } = useGetRecipes({
    ...params,
    limit: 8,
    page: page,
  });

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const onSetParams = (params: IRecipeParams) => {
    setParams(params);
  };

  return (
    <div className="flex flex-col p-[40px] items-center">
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <>
          <div className="flex flex-col gap-[20px] items-center pb-[20px]">
            <Typography
              variant="h1"
              className="!font-semiBold text-main-darkBg"
            >
              Receitas
            </Typography>
            <Filters onSetParams={onSetParams} />
          </div>
          {error ? (
            <h1>ERRO</h1>
          ) : (
            <>
              <Recipes recipes={recipes} />
              <PaginationControlled handleChange={handleChange} page={page} />
            </>
          )}
        </>
      )}
    </div>
  );
};
