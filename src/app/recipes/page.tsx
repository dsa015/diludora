//import { SearchComponent } from "@/components/search-component/SearchComponent";
import { AddRecipe } from "@/components/add-recipe/AddRecipe";
import { fetchRecipes } from "@/pocketbase";

const Recipes = async () => {
  const data = await fetchRecipes();

  return (
    <>
      {/* Maybe like an infinity loader here? */}
      <h1>Recipes</h1>
      <p>
        A list of all recipes you can find. Here you can browse recipes and also
        search through them
      </p>
      <ul>
        {data.map((recipe) => (
          <li key={recipe.id}>{recipe.displayName}</li>
        ))}
      </ul>
      {/* <h2>Search through recipes!</h2>
      <SearchComponent /> */}
      <AddRecipe />
    </>
  );
};

export default Recipes;
