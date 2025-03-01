import Image from "next/image";
import styles from "./RecipeLegend.module.scss";

type RecipeLegendProps = {
  imageSrc?: string;
  displayName?: string;
  description?: string;
};

export const RecipeLegend = ({
  imageSrc,
  displayName,
  description,
}: RecipeLegendProps) => {
  return (
    <div>
      <div className={styles.nameDescription}>
        <h1>{displayName}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={imageSrc ?? ""}
          alt={displayName ?? ""}
          // kanskje bruke fill istedenfor
          fill
          style={{
            borderRadius: "1rem",
          }}
        />
      </div>
      <p>prep time 15min | lorum ipsum 4 | lorum</p>
    </div>
  );
};
