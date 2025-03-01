import { Nutrients } from "@/pocketbase";
import styles from "./Instruction.module.scss";

type InstructionProps = {
  ingredients?: string[];
  displayName?: string;
  nutrition?: Nutrients[];
};

export const Instruction = ({
  ingredients,
  displayName,
  nutrition,
}: InstructionProps) => {
  return (
    <div>
      <h2>Ingredients for {displayName}</h2>
      <ol className={styles.ingredientsList}>
        {ingredients?.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ol>
      <div className={styles.nutritionContainer}>
        <h2>Nutritions</h2>
        <ul className={styles.nutritionList}>
          {nutrition?.map((e) => (
            <li className={styles.nutritionItem} key={e.name}>
              <span>{e.name}</span>
              <span>{e.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
