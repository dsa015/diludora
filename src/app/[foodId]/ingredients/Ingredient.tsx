import styles from "./Ingredient.module.scss";

export const Ingredient = ({ instruction }: { instruction: string[] }) => {
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
        {instruction?.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ol>
    </div>
  );
};
