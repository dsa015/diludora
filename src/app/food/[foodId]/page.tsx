"use client";

import useCollection from "@/app/hooks/useCollection";

type foodIdParams = {
  foodId: string;
};

const IngredientsForRecipe = ({ recipeId }: { recipeId: string }) => {
  const { data } = useCollection("ingredients");
  console.log(recipeId);
  console.log(data.map((item) => item.recipeId));
  return (
    <div>
      <ul>
        {data.map(
          (item) =>
            item.recipeId == recipeId && (
              <li key={item.id}>
                {item.ingredient} - {item.amount} {item.unit}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

// the text content should be from a database or a file?
const FoodRecipe = ({ params }: { params: foodIdParams }) => {
  return (
    <div>
      <h1>{params.foodId}</h1>
      <p>
        For this recipe we are going to make {params.foodId} and kattarikai
        curry:
      </p>

      <h2>Ingredients for {params.foodId}</h2>
      <IngredientsForRecipe recipeId={params.foodId} />
      <h2>Ingredients for kattarikai curry</h2>
      <li>Kaduku</li>
      <li>lille sirakam</li>
      <li>løk</li>
      <li>tomat</li>
      <li>milakai</li>
      <li>vann</li>
      <li>tinmilk</li>
    </div>
  );
};

export default FoodRecipe;
