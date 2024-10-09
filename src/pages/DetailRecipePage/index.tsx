import { FC } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {  Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { useGetRecipeDetails } from "src/hooks";
import { NutricionalTable } from "./components/NutricionalTable";
import { PrepTimePortion } from "./components/PrepTimePortion";
import { Ingredients } from "./components/Ingredients";
import { RecentRecipes } from "./components/RecentRecipes";
import { Instructions } from "./components/Instructions";
import { Tags } from "./components/Tags";

export const Component: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { recipeDetails, loading, error } = useGetRecipeDetails(id || ""); 

  const goBack = () => {
    navigate(-1);
  };

  if (loading) return <Typography>Carregando...</Typography>;
  if (error) return <Typography>Erro: {error}</Typography>;

  return (
    <div className="flex pt-[50px] p-[10px] justify-evenly sm:flex-col sm:items-center">
      <div>
        <button onClick={goBack} className="flex gap-[10px] mb-[30px]">
          <ArrowBackIosIcon className="text-main-primary" />
          <Typography variant="body1" className="text-main-darkBg">
            Receitas
          </Typography>
        </button>
        <Typography
          variant="h1"
          className="!font-semiBold text-main-darkBg pb-[17px]"
        >
          {recipeDetails?.title}
        </Typography>
        <div className="flex flex-col gap-[40px] sm:items-center">
          <div className="flex flex-col">
            <img
              src={recipeDetails?.image}
              className="lg:w-[650px] md:w-[420px] sm:w-[300px] bg-cover rounded-[12px]"
            />
            <PrepTimePortion
              prepTime={recipeDetails?.preparationTime as number}
              servings={recipeDetails?.servings as number}
            />
          </div>
          <Ingredients ingredients={recipeDetails?.ingredients}/>
          <Instructions instructions={recipeDetails?.instructions}/>
        </div>
        <Box component="div" className="w-full h-[6px] bg-main-primary mt-[60px]"/>
      </div>
      <div className="flex flex-col gap-[50px] pt-[100px] sm:pt-[60px] sm:items-center">
        <NutricionalTable />
          <RecentRecipes/>
          <Tags tags={recipeDetails?.tags}/>
      </div>
    </div>
  );
};
