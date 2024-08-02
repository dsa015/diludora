import { getImageToRecipe, getRecipeByName } from "@/pocketbase";
import Image from "next/image";

// the text content should be from a database or a file?
const FoodRecipe = async ({ params }: { params: { foodId: string } }) => {
  const rec = await getRecipeByName(params.foodId);
  const img = rec ? await getImageToRecipe(rec.id) : "";
  const ingredients = rec?.ingredient.split("\n");
  const instruction = rec?.instruction.split(".");

  return (
    <div>
      <h1>{rec?.displayName}</h1>
      <Image src={img} alt={rec ? rec?.name : ""} width={400} height={250} />
      <h2>Ingredients for {rec?.displayName}</h2>
      <ul>
        {ingredients?.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
      <h2>Steps</h2>
      <ul>
        {instruction?.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodRecipe;
