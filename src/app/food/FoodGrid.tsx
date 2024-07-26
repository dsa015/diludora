"use client";
import Image from "next/image";
import styles from "./FoodGrid.module.scss";
import Link from "next/link";
import useFoodCollection from "../hooks/useFoodCollection";

// can refactor to map over an array of objects
const FoodItem = ({ name }: { name: string }) => {
  return (
    // maybe this should be a typeof food? e,g, if not exist show page

    <Link href={`/food/${name}`}>
      <Image src={"/food.png"} alt="" width={250} height={300} />
      <p>{name}</p>
    </Link>
  );
};

// fix the food spacing issue
// const food = ["Adtu curry", "Koli curry", "Devil chicken", "Nandu curry"].map(
//   (food) => food.replace(" ", "")
// );
const FoodGrid = () => {
  const { data } = useFoodCollection("recipes");
  const name = data.map((food) => food.name.replace(" ", ""));
  const foodId = data.map((food) => food.id);
  return (
    <ul className={styles.foodUl}>
      {data.map((food) => (
        <FoodItem name={food.id} />
      ))}
    </ul>
  );
};

export default FoodGrid; // route = "/food"
