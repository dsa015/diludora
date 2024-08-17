import { getImageToRecipe, getRecipeByName } from "@/pocketbase";
import Image from "next/image";
//import styles from "./FoodId.module.scss";
import { Instruction } from "@/app/[foodId]/instruction-container/Instruction";
import { Ingredient } from "@/app/[foodId]/ingredients/Ingredient";

const FoodRecipe = async ({ params }: { params: { foodId: string } }) => {
  // TODO refactor all this
  const rec = await getRecipeByName(params.foodId);
  const img = rec ? await getImageToRecipe(rec.id) : "";
  const ingredients = rec?.ingredient.split("\n") ?? [];
  const instruction = rec?.instruction.split(".") ?? [];
  const nutrition = rec?.nutrition.split("\n") ?? [];
  const displayName = rec?.displayNam ?? "";
  const isNotEmpty = instruction.length > 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>{rec?.displayName}</h1>
          <p>{rec?.description}</p>
        </div>
        <div
          style={{
            width: "1000px",
            height: "850px",
            position: "relative",
          }}
        >
          <Image
            src={img}
            alt={rec ? rec?.name : ""}
            // kanskje bruke fill istedenfor
            fill
            style={{
              borderRadius: "1rem",
            }}
          />
        </div>
        <p>prep time 15min | lorum ipsum 4 | lorum</p>
      </div>
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
