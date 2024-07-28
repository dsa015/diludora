"use client";
import { pb } from "@/pocketbase";
import { useState, useEffect } from "react";

type RecordModel = {
  // Add other properties of RecordModel if needed
  id: string;
  created: string;
  updated: string;
};

type Ingredient = {
  ingredient: string;
  recipeId: string;
  amount: number;
  unit: string;
};

export type IngredientModel = RecordModel & Ingredient;

function useCollection(collection: string) {
  const [data, setData] = useState([] as IngredientModel[]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const col = pb.collection(collection);
    col
      .getFullList<IngredientModel>({ sort: "-created" })
      .then((res) => {
        setData(res);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [collection]);

  return { data, isLoading, error };
}

export default useCollection;
