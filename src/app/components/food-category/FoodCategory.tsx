import styles from "./FoodCategory.module.scss";
import Image from "next/image";

const foodCategories = ["Food", "Soties", "Tea", "Desserts"];
const Category = ({ category }: { category: string }) => {
  return (
    <li>
      <Image src={"/food.png"} alt="" width={150} height={150} />
      <p>{category}</p>
    </li>
  );
};

const FoodCategory = () => {
  return (
    <ul className={styles.foodUl}>
      {foodCategories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </ul>
  );
};

export default FoodCategory;
