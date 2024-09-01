//import { SearchComponent } from "@/components/search-component/SearchComponent";
"use client";
import { addRecipeHandler, fetchRecipes } from "@/pocketbase";
import { useState } from "react";

const UserRecipeForm = () => {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  return (
    <form>
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
          addRecipeHandler(recipeName, description, ingredients, instructions)
        }
      >
        Add a recipe
      </button>
    </form>
  );
};

const AddRecipe = () => {
  const [isOpen, setIsOpen] = useState(false);

  // a modal pops up that shows instructions
  return (
    <>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Add recipe!</button>
        {isOpen && <UserRecipeForm />}
      </div>
    </>
  );
};

const Recipes = async () => {
  const fetchRecipe = await fetchRecipes();
  const recipes = fetchRecipe.map((e) => e.displayName);
  return (
    <>
      {/* Maybe like an infinity loader here? */}
      <h1>Recipes</h1>
      <p>
        A list of all recipes you can find. Here you can browse recipes and also
        search through them
      </p>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe}>{recipe}</li>
        ))}
      </ul>
      {/* <h2>Search through recipes!</h2>
      <SearchComponent /> */}
      <AddRecipe />
    </>
  );
};

export default Recipes;
