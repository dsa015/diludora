import Link from "next/link";
import styles from "./FoodCategory.module.scss";
import Image from "next/image";

const foodCategories = ["Main-dishes", "Soties", "Drinks", "Desserts"];
const images = [
  "/food.png",
  "/mutton-rolls.jpg",
  "/drinks.png",
  "/Desserts.jpg",
];

const lst = foodCategories.map((c, i) => ({
  category: c,
  image: images[i],
}));

const FoodCategory = () => {
  return (
    <div className={styles.container}>
      <h2>Browse categories</h2>
      <ul className={styles.foodUl}>
        {lst.map((category) => (
          <li key={category.category} className={styles.category}>
            <Link href={`/recipes/${category.category}`}>
              <Image
                src={category.image}
                alt={category.image}
                width={150}
                height={150}
              />
            </Link>
            <p>{category.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodCategory;
