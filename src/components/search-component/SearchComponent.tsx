//import { fetchRecipes } from "@/pocketbase
import styles from "./SearchComponent.module.scss";

export const SearchComponent = async () => {
  //const recipes = await fetchRecipes();

  return (
    <div className={styles.searchContainer}>
      <h2>Looking for something?</h2>
      {/* <p>Browse through {recipes.length} recipes</p> */}
      <input
        type="text"
        placeholder="Search"
        style={{
          padding: "1rem",
          width: "24rem",
          margin: "auto",
        }}
      />
    </div>
  );
};
