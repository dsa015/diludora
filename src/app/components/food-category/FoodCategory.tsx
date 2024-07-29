import styles from "./FoodCategory.module.scss";
import Image from "next/image";

const foodCategories = ["Food", "Soties", "Tea", "Desserts"];
const images = ['/food.png', '/mutton-rolls.jpg', '/tea.jpg', '/Desserts.jpg',];

const lst = foodCategories.map((c, i) => ({
  category: c,
  image: images[i]
}))

const FoodCategory = () => {
  return (
    <ul className={styles.foodUl}>  
    {lst.map((category) => (
      <li key={category.category} >
        <Image key={category.category} src={category.image} alt={category.image} width={150} height={150}/>
        <p>{category.category}</p>    
      </li>
    ))}
    </ul>
  );
};

export default FoodCategory;