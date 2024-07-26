"use client";
import PocketBase from "pocketbase";
import { useState, useEffect } from "react";

type RecordModel = {
  // Add other properties of RecordModel if needed
  id: string;
  created: string;
  updated: string;
};

type Recipe = {
  name: string;
  description: string;
  instruction: string;
};

export type RecipeModel = RecordModel & Recipe;

export const pb = new PocketBase("http://127.0.0.1:8090");

function useFoodCollection(collection: string) {
  const [data, setData] = useState([] as RecipeModel[]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const col = pb.collection(collection);
    col
      .getFullList<RecipeModel>({ sort: "-created" })
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

export default useFoodCollection;
