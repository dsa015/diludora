import { LeftArrow, RightArrow } from "../arrows/Arrows";
import styles from "./Buttons.module.scss";

type ButtonProps = {
  setPreviousImage: () => void;
  setNextImage: () => void;
};

export const Buttons = ({ setPreviousImage, setNextImage }: ButtonProps) => {
  return (
    <>
      <button
        aria-label="View Previous Image"
        className={styles.imageButton}
        style={{ left: 0 }}
        onClick={() => setPreviousImage()}
      >
        <LeftArrow />
      </button>
      <button
        aria-label="View Next Image"
        className={styles.imageButton}
        style={{ right: 0 }}
        onClick={() => setNextImage()}
      >
        <RightArrow />
      </button>
    </>
  );
};
