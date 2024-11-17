import { Typography } from "@mui/material";
import { FC } from "react";

const goals = [
  "Facilitar a troca de receitas entre usuários, tornando o processo de compartilhamento simples e divertido.",
  "Promover a interação e a colaboração por meio de curtidas, comentários e dicas, criando uma rede ativa de cozinheiros e entusiastas.",
  "Incentivar o aprendizado com a publicação de receitas detalhadas e dicas de cozinha, ajudando você a elevar suas habilidades culinárias.",
  "Destacar receitas e perfis de destaque, onde os melhores pratos e chefs da comunidade ganham visibilidade."
];

export const Goals: FC = () => {
  return (
    <div className="flex flex-col gap-[40px] items-center p-[20px]">
      <Typography variant="h1" className="!font-semiBold text-main-darkBg">
        Objetivos do CookBook:
      </Typography>
      <div className="flex flex-wrap gap-[25px] justify-center">
        {goals.map((item, index) => (
            <div className="w-[300px] p-[20px] rounded-[8px] shadow-lg">
          <Typography key={index} variant="body1" className="text-neutral-700 text-center">
            {item}
          </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
