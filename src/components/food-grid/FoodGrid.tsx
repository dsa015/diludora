import styles from "./FoodGrid.module.scss";
import { fetchRecipes } from "@/pocketbase";
import { ImageSlider } from "./image-carousel/ImageSlider";

export type ImageAndUrl = {
  url: string;
  alt: string;
};
const FoodGrid = async () => {
  const recipes = await fetchRecipes();
  const url = "https://lingam-delights.fly.dev/api/files";

  const imgUrls: ImageAndUrl[] = recipes.map((food) => ({
    url: `${url}/${food.collectionId}/${food.id}/${food.image}`,
    alt: food.description,
  }));

  const names = recipes.map((food) => food.name);

  return (
    <div className={styles.container}>
      <div className={styles.customBorder}>
        <h2>
          <span> Todays recipes</span>
        </h2>
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <ImageSlider names={names} images={imgUrls} />
      </div>
    </div>
  );
};

export default FoodGrid; // route = "/food"
