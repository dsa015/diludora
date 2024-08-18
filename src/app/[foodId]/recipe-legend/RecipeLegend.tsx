import Image from "next/image";

type RecipeLegendProps = {
  imageSrc: string;
  displayName: string;
  description: string;
};

export const RecipeLegend = ({
  imageSrc,
  displayName,
  description,
}: RecipeLegendProps) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>{displayName}</h1>
        <p>{description}</p>
      </div>
      <div
        style={{
          width: "1000px",
          height: "850px",
          position: "relative",
        }}
      >
        <Image
          src={imageSrc}
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
