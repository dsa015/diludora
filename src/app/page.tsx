import FoodCategory from "./components/food-category/FoodCategory";
import NavigationBar from "./components/NavigationBar";
import FoodGrid from "./food/FoodGrid";

const Home = async () => {
  return (
    <div>
      <NavigationBar />
      <FoodGrid />
      <FoodCategory />
    </div>
  );
};

export default Home; //route = "/"
