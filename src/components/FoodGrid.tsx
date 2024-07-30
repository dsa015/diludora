import Image from "next/image";
import styles from "./FoodGrid.module.scss";
import Link from "next/link";
import { API_URL, fetchRecipes } from "@/pocketbase";

const FoodGrid = async () => {
  const recipes = await fetchRecipes();
  return (
    <div className={styles.container}>
      {recipes.map((food) => (
        <Link key={food.id} href={`/food-category/food/${food.name}`}>
          <Image
            src={`${API_URL}/api/files/${food.collectionId}/${food.id}/${food.image}`}
            alt=""
            width={300}
            height={300}
          />
          <p>{food.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default FoodGrid; // route = "/food"
