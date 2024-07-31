"use client";

const NavigationBar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{cursor: "pointer"}}onClick={() => (window.location.href = "/")}>
        Lingam bites (kanskje logo istedenfor)
      </h1>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1rem",
          }}
        >
          <li key={1}>
            <a href="/about">About</a>
          </li>
          <li key={2}>
            <a href="/recipes">Recipes</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
