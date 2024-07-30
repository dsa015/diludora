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
      <h1 onClick={() => (window.location.href = "/")}>
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
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/recipes">Recipes</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
