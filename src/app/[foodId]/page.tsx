import { getImageToRecipe, getRecipeByName } from "@/pocketbase";
import Image from "next/image";
import styles from "./FoodId.module.scss";

// the text content should be from a database or a file?
const FoodRecipe = async ({ params }: { params: { foodId: string } }) => {
  const rec = await getRecipeByName(params.foodId);
  const img = rec ? await getImageToRecipe(rec.id) : "";
  const ingredients = rec?.ingredient.split("\n");
  const instruction = rec?.instruction.split(".");
  const nutrition = rec?.nutrition.split("\n");

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
        <div>
          <h2>Ingredients for {rec?.displayName}</h2>
          <ol
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "0",
              listStyleType: "none",
            }}
          >
            {ingredients?.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ol>
          <div
            style={{
              backgroundColor: "#efeeee",
              maxWidth: "300px",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <h2>Nutritions</h2>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* justify it space between */}
              {nutrition?.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2>Steps</h2>
          <ol
            className={styles.stepsList}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {instruction?.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodRecipe;
