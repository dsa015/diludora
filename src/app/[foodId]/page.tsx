import { getImageToRecipe, getRecipeByName } from "@/pocketbase";
//import styles from "./FoodId.module.scss";
import { Instruction } from "@/app/[foodId]/instruction-container/Instruction";
import { Ingredient } from "@/app/[foodId]/ingredients/Ingredient";
import { RecipeLegend } from "./recipe-legend/RecipeLegend";

const FoodRecipe = async ({ params }: { params: { foodId: string } }) => {
  // TODO refactor all this
  const rec = await getRecipeByName(params.foodId);
  const img = rec ? await getImageToRecipe(rec.id) : "";
  const ingredients = rec?.ingredient.split("\n") ?? [];
  const instruction = rec?.instruction.split(".") ?? [];
  const nutrition = rec?.nutrition.split("\n") ?? [];
  const displayName = rec?.displayName ?? "";
  const description = rec?.description ?? "";
  const isNotEmpty = instruction.length > 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <RecipeLegend
        imageSrc={img}
        displayName={displayName}
        description={description}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          maxWidth: "1000px",
          paddingBlock: "2rem",
        }}
      >
        <Instruction
          ingredients={ingredients}
          displayName={displayName}
          nutrition={nutrition}
        />
        {isNotEmpty && <Ingredient instruction={instruction} />}
      </div>
    </div>
  );
};

export default FoodRecipe;
