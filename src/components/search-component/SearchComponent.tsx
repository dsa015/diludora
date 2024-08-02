//import { fetchRecipes } from "@/pocketbase
import { SearchIcon } from "./search";
import styles from "./SearchComponent.module.scss";

export const SearchComponent = async () => {
  //const recipes = await fetchRecipes();

  return (
    <div className={styles.searchContainer}>
      {/* <p>Browse through {recipes.length} recipes</p> */}
      <input
        type="text"
        name="search"
        placeholder="Search recipes"
        style={{
          padding: "0.5rem",
          width: "24rem",
        }}
      />
      <span className={styles.icon}>
        <SearchIcon />
      </span>
    </div>
  );
};
