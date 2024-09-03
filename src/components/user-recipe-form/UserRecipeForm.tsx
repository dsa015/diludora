"use client";
import { addRecipeHandler } from "@/pocketbase";
import { useState } from "react";

export const UserRecipeForm = () => {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        maxWidth: "23rem",
      }}
    >
      <input
        type="text"
        onChange={(e) => setRecipeName(e.target.value)}
        required
        placeholder="Recipe name"
      />
      <input
        type="text"
        required
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        required
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Food category"
      />
      <input
        type="text"
        required
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients"
      />
      <input
        type="text"
        required
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
      />

      <button
        type="button"
        onClick={() =>
          addRecipeHandler(
            recipeName,
            description,
            category,
            ingredients,
            instructions
          )
        }
      >
        Add a recipe
      </button>
    </form>
  );
};
