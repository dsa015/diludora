import Link from "next/link";
import styles from "./FoodCategory.module.scss";
import Image from "next/image";

const foodCategories = ["Main-dishes", "Soties", "Drinks", "Desserts"];
const images = [
  "/food-categories/dinner.png",
  "/food-categories/sorties.png",
  "/food-categories/drinks.png",
  "/food-categories/dessert.png",
];

const lst = foodCategories.map((c, i) => ({
  category: c,
  image: images[i],
}));

const FoodCategory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.customBorder}>
        <h2>
          <span>Browse categories</span>
        </h2>
      </div>
      <div className={styles.foodUl}>
        {lst.map((category) => (
          <>
            <Link href={`/recipes/${category.category}`}>
              <Image
                src={category.image}
                alt={category.image}
                width={150}
                height={150}
              />
              <p>{category.category}</p>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
