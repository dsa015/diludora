//import { fetchRecipes } from "@/pocketbase";
export const SearchComponent = async () => {
  //const recipes = await fetchRecipes();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "24rem",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2>Looking for something?</h2>
      {/* <p>Browse through {recipes.length} recipes</p> */}
      <input type="text" placeholder="Search" style={{ padding: "1rem" }} />
    </div>
  );
};
