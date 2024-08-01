import Image from "next/image";
import styles from "./FoodGrid.module.scss";
import Link from "next/link";
import { fetchRecipes } from "@/pocketbase";

const FoodGrid = async () => {
  const recipes = await fetchRecipes();
  const url = "https://lingam-delights.fly.dev/api/files";

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {recipes.map((food) => (
          <Link key={food.id} href={`/${food.name}`}>
            <Image
              src={`${url}/${food.collectionId}/${food.id}/${food.image}`}
              alt=""
              width={300}
              height={300}
            />
            <p>{food.displayName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodGrid; // route = "/food"
