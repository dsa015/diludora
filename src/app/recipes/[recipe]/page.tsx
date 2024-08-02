import { getImageToRecipe, getFoodCategory, Recipe } from "@/pocketbase";
import Image from "next/image";
import Link from "next/link";

const Recipes = async ({ props }: { props: Recipe }) => {
  const img = await getImageToRecipe(props.id);
  return (
    <div>
      <Link href={`/${props.name}`}>
        <Image src={img} alt="" width={200} height={200} />
      </Link>
      <p>{props.displayName}</p>
    </div>
  );
};

const RecipeList = async ({ params }: { params: { recipe: string } }) => {
  const mainDishes = await getFoodCategory(params.recipe.toLowerCase());
  return (
    <div>
      <h1>{params.recipe}</h1>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        {mainDishes.map((props) => {
          return (
            <li key={props.id}>
              <Recipes props={props} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
