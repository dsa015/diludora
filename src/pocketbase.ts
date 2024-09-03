import PocketBase, { RecordModel } from "pocketbase";

export const pb = new PocketBase("https://lingam-delights.fly.dev");

export type Nutrients = {
  name: string;
  value: string;
};
export interface Recipe extends RecordModel {
  id: string;
  name: string;
  displayName: string;
  description: string;
  instruction: string;
  image: string;
  ingredient: string;
  nutrition: Nutrients[];
}

export async function fetchRecipes() {
  const recipesList = await pb
    .collection("recipes")
    .getFullList({ requestKey: null });
  return recipesList as (RecordModel & Recipe)[];
}

export async function getRecipeByName(name: string) {
  try {
    const recipes = await pb.collection("recipes").getFullList({
      filter: `name = '${name}'`,
      requestKey: null,
    });
    if (recipes.length === 0) return null;
    return recipes[0] as Recipe;
  } catch (error) {
    console.error("Error fetching recipes by name", error);
    return null;
  }
}

export async function getFoodCategory(category: string) {
  const foodCategories = await pb.collection("recipes").getFullList({
    filter: `foodCategory = '${category}'`,
    requestKey: null,
  });
  return foodCategories as Recipe[];
}

export async function getImageToRecipe(recipeId: string) {
  const image: Recipe = await pb
    .collection("recipes")
    .getOne(recipeId, { requestKey: null });
  const fileUrl = pb.files.getUrl(image, image.image);
  return fileUrl;
}

export async function createUser(email: string, password: string) {
  try {
    await pb
      .collection("users")
      .create({ email, password, passwordConfirm: password });
  } catch (error) {
    console.error("Error registering user", error);
    return null;
  }
}

export async function loginUser(email: string, password: string) {
  try {
    await pb.collection("users").authWithPassword(email, password);
  } catch (error) {
    console.error("Error logging in user", error);
    return null;
  }
}

export async function addRecipeHandler(
  name: string,
  description: string,
  category: string,
  instruction: string,
  ingredient: string
) {
  if (!name || !description || !category || !instruction || !ingredient) {
    console.error("Please fill in all fields");
    return null;
  }
  try {
    await pb.collection("recipes").create({
      name,
      description,
      category,
      instruction,
      ingredient,
    });
    console.log("Recipe added successfully");
  } catch (error) {
    console.error("Error adding recipe", error);
    return null;
  }
}
