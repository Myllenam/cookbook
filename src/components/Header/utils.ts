export interface IHeaderItems {
    path: string;
    text: string;
  }
  
export const menuItems: IHeaderItems[] = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "receitas",
    text: "Receitas",
  },
  {
    path: "novaReceita",
    text: "Adicionar Receita",
  },
];
