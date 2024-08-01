import FoodCategory from "../components/food-category/FoodCategory";
import FoodGrid from "../components/food-grid/FoodGrid";
import { SearchComponent } from "@/components/search-component/SearchComponent";

const Home = async () => {
  return (
    <div>
      <FoodGrid />
      <FoodCategory />
      <SearchComponent />
    </div>
  );
};

export default Home; //route = "/"
