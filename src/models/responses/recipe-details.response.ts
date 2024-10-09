export interface IIngredient {
    name: string;
    quantity: number;
    unit: string;
  }
  
  export interface IInstruction {
    order: number;
    description: string;
  }
  
  export interface IRecipeDetails {
    id: number;
    title: string;
    image: string;
    preparationTime: number; 
    category: string;
    difficulty: string;
    servings: number;
    tags: string[];
    ingredients: IIngredient[];
    instructions: IInstruction[];
  }
  