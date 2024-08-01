import FoodCategory from "../components/food-category/FoodCategory";
import FoodGrid from "../components/food-grid/FoodGrid";
import { SearchComponent } from "@/components/search-component/SearchComponent";

const Home = () => {
  return (
    <main>
      <FoodGrid />
      <FoodCategory />
      <SearchComponent />
    </main>
  );
};

export default Home; //route = "/"
