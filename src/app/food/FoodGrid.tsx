import Image from "next/image";
import styles from "./FoodGrid.module.scss";
import Link from "next/link";
import { fetchRecipes } from "@/pocketbase";

// fix the food spacing issue
// const food = ["Adtu curry", "Koli curry", "Devil chicken", "Nandu curry"].map(
//   (food) => food.replace(" ", "")
// );
const FoodGrid = async () => {
  const recipes = await fetchRecipes();
  return (
    <ul className={styles.foodUl}>
      {recipes.map((food) => (
        <Link key={food.id} href={`/food/${food.name}`}>
          <Image src={"/food.png"} alt="" width={250} height={300} />
          <p>{food.name}</p>
        </Link>
      ))}
    </ul>
  );
};

export default FoodGrid; // route = "/food"
