import { Nutrients } from "@/pocketbase";

type InstructionProps = {
  ingredients: string[];
  displayName: string;
  nutrition: Nutrients[];
};

export const Instruction = ({
  ingredients,
  displayName,
  nutrition,
}: InstructionProps) => {
  return (
    <div>
      <h2>Ingredients for {displayName}</h2>
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
            padding: "0",
          }}
        >
          {/* justify it space between? */}
          {nutrition?.map((e) => (
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid lightgrey",
              }}
              key={e.name}
            >
              <span>{e.name}</span>
              <span>{e.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
