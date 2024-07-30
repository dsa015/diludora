import PocketBase, { RecordModel } from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");
export interface Recipe extends RecordModel {
  id: string;
  name: string;
  displayName: string;
  description: string;
  instruction: string;
  image: string;
  ingredient: string;
}

export interface Ingredient extends RecordModel {
  id: string;
  ingredient: string;
  recipeRelation: string;
  amount: number;
  unit: string;
}

export async function fetchRecipes() {
  const recipesList = await pb.collection("recipes").getList(1, 50);
  return recipesList.items as (RecordModel & Recipe)[];
}

export async function getRecipeByName(name: string): Promise<Recipe> {
  const recipes = await pb.collection("recipes").getFullList({
    filter: `name = '${name}'`,
  });
  return recipes[0] as Recipe;
}

export default async function getImageToRecipe(
  collectionId: string,
  recipeId: string
) {
  const image: Recipe = await pb.collection("recipes").getOne(recipeId);
  const fileUrl = `http://127.0.0.1:8090/api/files/${collectionId}/${recipeId}/${image.image}`;
  return fileUrl;
}
