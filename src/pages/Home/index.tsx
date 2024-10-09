import { FC } from "react";
import { Typography } from "@mui/material";
import { Carroussel } from "src/components";
import { IntroductionSection } from "./components/IntroductionSection";
import { useNavigate } from "react-router-dom";
import { Goals } from "./components/Goals";

export const Component: FC = () => {

  const navigate = useNavigate();
  const goToRecipePage = () => {
    navigate("/receitas");
  };

  return (
    <div className="max-w[100vw] h-full flex flex-col items-center gap-[35px] pb-[20px]">
      <div className=" w-[100%]">
        <Carroussel />
      </div>
      <div className=" w-full flex justify-evenly sm:items-center sm:flex-col p-7">
        <div className="flex flex-col gap-[30px]">
          <Typography variant="h1" className="!font-semiBold text-main-darkBg">
            Bem vindo ao CookBook!
          </Typography>
          <IntroductionSection gotoRecipePage={goToRecipePage}/>
        </div>

        <img
          alt="hello kitty gif"
          src={
            "https://s3-alpha-sig.figma.com/img/a62e/fb03/543d056db6dec6e2054563c98aa463c1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KgsFao00T1PiUwoWjqbuSc4wNinTBKNGilNrZAUZ7C6ZERev6avJlT6fwBia9kzMnJYT8uQnU5XCKNEj60CzLPEkVk-OOxwEjSMb6luUlGeWzD36VH1YSJzPdaSfALvm-UonUTPt8Vq69EGTvv4G1gEPcrgo2vOoOSDCExYSzfiJFI7MBJ6LGteqtaOBJjSX0nFPD~ORzUOUSjDmuJLt06Sph9ANvcgEVjsLW5YPQNletXwTQfMqLqvFIB3tyssYkjL5RII0xY-jcHGnMhYLbwIb4cSXpqwEBnWIiKL9ddnzFbOIq9aEfirQrigwOqzM8BXJNbZ-32c4IlK0o304iA__"
          }
        />
      </div>
      <Goals/>
    </div>
  );
};
