"use client";
import { useState } from "react";
import styles from "./Ingredient.module.scss";

export const Ingredient = ({ instruction }: { instruction: string[] }) => {
  const [isChecked, setIsChecked] = useState<null | number>(null);
  const handleToggle = (i: number) =>
    i ? setIsChecked(i) : setIsChecked(null);

  return (
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
        {instruction?.map((e, i) => (
          <li
            key={e}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <span key={i} className={isChecked === i ? styles.instruction : ""}>
              {e}
            </span>
            <input
              onClick={() => handleToggle(i)}
              type="checkbox"
              name="asd"
              id="dsa"
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
