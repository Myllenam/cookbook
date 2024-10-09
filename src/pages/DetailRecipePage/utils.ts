import boloCenoura from "src/assets/bolo-de-cenoura.png"
import ravioli from "src/assets/receitas-de-ravioli.png"
import boloIndiano from "src/assets/bolo-indiano.png"

export const mockNutritionalInfo = [
    { label: "Calorias", value: "257 kcal" },
    { label: "Carboidratos", value: "30g" },
    { label: "Gordura", value: "15g" },
    { label: "Proteína", value: "3.5g" },
    { label: "Fibras", value: "1g" },
    { label: "Açúcares", value: "21g" },
    { label: "Sódio", value: "23g" }
  ];

  export const mockRecipes = [
    {
      id: 1,
      title: "Bolo de Cenoura",
      category: "Doce",
      difficulty: "Fácil",
      preparationTime: 90,
      likes: 323,
      image:boloCenoura, 
    },
    {
      id: 2,
      title: "Bolo Indiano",
      category: "Doce",
      difficulty: "Médio",
      preparationTime: 120,
      likes: 323,
      image: boloIndiano,
    },
    {
      id: 3,
      title: "Ravioli",
      category: "Almoço",
      difficulty: "Médio",
      preparationTime: 90,
      likes: 323,
      image: ravioli,
    },
  ];
  