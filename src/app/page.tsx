import FoodCategory from "../components/food-category/FoodCategory";
import FoodGrid from "../components/food-grid/FoodGrid";

const Home = () => {
  return (
    <>
      <FoodGrid />
      <FoodCategory />
    </>
  );
};

export default Home; //route = "/"
