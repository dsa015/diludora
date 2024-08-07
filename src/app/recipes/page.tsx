//import { SearchComponent } from "@/components/search-component/SearchComponent";

import { fetchRecipes } from "@/pocketbase";

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
    </>
  );
};

export default Recipes;
