import { FC } from 'react';
import { Typography } from '@mui/material';

export const IntroductionSection:FC = () => {
  return (
    <div className=" rounded-lg text-center max-w-lg mx-auto">
      <Typography variant="body1" component="p" className="text-main-darkBg mb-4 text-justify">
        Aqui, você encontra o ponto de encontro perfeito para apaixonados por gastronomia. Nosso objetivo é conectar pessoas através da culinária, oferecendo uma plataforma onde você pode:
      </Typography>

      <ul className="list-disc list-inside text-main-darkBg mb-4 text-justify">
        <Typography variant="body1" component="li">Compartilhar suas receitas favoritas.</Typography>
        <Typography variant="body1" component="li">Descobrir novos sabores através de receitas criativas e inovadoras.</Typography>
        <Typography variant="body1" component="li">Curtir e comentar nos pratos que mais lhe chamarem a atenção, participando ativamente dessa experiência.</Typography>
      </ul>

      <Typography variant="body1" component="p" className="text-main-darkBg mb-4 text-justify">
        Seja para uma refeição do dia a dia ou algo especial, o CookBook é o lugar certo para inspirar, criar e compartilhar. Comece a explorar agora e transforme sua paixão pela culinária em um momento delicioso de troca e aprendizado!
      </Typography>

    </div>
  );
};
