"use client";
import styles from "./FoodId.module.scss";
import { Instruction } from "@/app/[foodId]/instruction-container/Instruction";
import { Ingredient } from "@/app/[foodId]/ingredients/Ingredient";
import { RecipeLegend } from "./recipe-legend/RecipeLegend";
import useRecipes from "@/hooks/useRecipe";

const FoodRecipe = ({ params }: { params: { foodId: string } }) => {
  const {
    img,
    displayName,
    description,
    ingredients,
    nutrition,
    instruction,
    isNotEmpty,
  } = useRecipes(params.foodId);

  return (
    <div className={styles.foodRecipe}>
      <RecipeLegend
        imageSrc={img}
        displayName={displayName}
        description={description}
      />
      <div className={styles.instructionContainer}>
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
