import { useState, useEffect } from "react";
import { getRecipeByName, getImageToRecipe, Nutrients } from "@/pocketbase";

type DataType = {
  img: string;
  ingredients: string[];
  instruction: string[];
  displayName: string;
  description: string;
  isNotEmpty: boolean;
  nutrition: Nutrients[];
};

const useRecipes = (foodId: string) => {
  const [data, setData] = useState<DataType>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rec = await getRecipeByName(foodId);
        const img = rec ? await getImageToRecipe(rec.id) : "";
        const ingredients = rec?.ingredient.split("\n") ?? [];
        const instruction = rec?.instruction.split(".") ?? [];
        const displayName = rec?.displayName ?? "";
        const description = rec?.description ?? "";
        const isNotEmpty = instruction.length > 0;
        const nutrition = rec?.nutrition ?? [];

        setData({
          img,
          ingredients,
          instruction,
          displayName,
          description,
          isNotEmpty,
          nutrition,
        });
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [foodId]);

  return { ...data, loading, error };
};

export default useRecipes;
