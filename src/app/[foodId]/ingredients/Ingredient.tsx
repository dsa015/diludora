import styles from "./Ingredient.module.scss";

export const Ingredient = ({ instruction }: { instruction?: string[] }) => {
  return (
    <div>
      <h2>Steps</h2>
      <ol className={styles.stepsList}>
        {instruction?.map((e) => (
          <li key={e}>
            <span>{e}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};
