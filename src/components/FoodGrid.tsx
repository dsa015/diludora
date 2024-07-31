import Image from "next/image";
import styles from "./FoodGrid.module.scss";
import Link from "next/link";
import { getImageToRecipe,fetchRecipes } from "@/pocketbase";

const FoodGrid = async () => {
  const recipes = await fetchRecipes();
  const img = await getImageToRecipe(recipes[0].id)

  return (
    <>
    <div className={styles.container}>
      {recipes.map((food) => (
        <Link key={food.id} href={`/${food.name}`}>
          <Image
            src={img}
            alt=""
            width={300}
            height={300}
            />
          <p>{food.displayName}</p>
        </Link>
      ))}
    </div>
      </>
  );
};

export default FoodGrid; // route = "/food"
