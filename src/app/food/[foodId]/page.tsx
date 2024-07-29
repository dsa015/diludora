import getImageToRecipe, {
  getIngredientsByRecipeId,
  getRecipeByName,
} from "@/pocketbase";
import Image from "next/image";

// the text content should be from a database or a file?
const FoodRecipe = async ({ params }: { params: { foodId: string } }) => {
  const rec = await getRecipeByName(params.foodId);
  const ing = await getIngredientsByRecipeId(rec.id);
  const img = await getImageToRecipe(rec.collectionId, rec.id);

  return (
    <div>
      <h1>{params.foodId}</h1>
      <Image src={img} alt={rec.name} width={400} height={250} />
      <h2>Ingredients for {params.foodId}</h2>
      <ul>
        {ing.map((item) => (
          <li key={item.id}>
            {item.ingredient} - {item.amount} {item.unit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodRecipe;
