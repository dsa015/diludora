import PocketBase, { RecordModel } from "pocketbase";

export const pb = new PocketBase("https://lingam-delights.fly.dev");
export interface Recipe extends RecordModel {
  id: string;
  name: string;
  displayName: string;
  description: string;
  instruction: string;
  image: string;
  ingredient: string;
}

export async function fetchRecipes() {
  const recipesList = await pb.collection("recipes").getList(1, 50);
  return recipesList.items as (RecordModel & Recipe)[];
}

export async function getRecipeByName(name: string): Promise<Recipe | null> {
  try {
    const recipes = await pb.collection("recipes").getFullList({
      filter: `name = '${name}'`,
    });
    if (recipes.length === 0) return null
    return recipes[0] as Recipe;
  } catch(error) {
    console.error("Error fetching recipes by name", error)
    return null
  }
}

export async function getFoodCategory(category: string) {
  const foodCategories = await pb.collection('recipes').getFullList({
    filter: `foodCategory = '${category}'`
  })
  return foodCategories as Recipe[]
}

export async function getImageToRecipe(
  recipeId: string
) {
  const image: Recipe = await pb.collection("recipes").getOne(recipeId);
  const fileUrl = pb.files.getUrl(image, image.image)
  return fileUrl;
}
