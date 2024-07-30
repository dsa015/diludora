import FoodCategory from "../components/FoodCategory";
import NavigationBar from "../components/NavigationBar";
import FoodGrid from "../components/FoodGrid";

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
