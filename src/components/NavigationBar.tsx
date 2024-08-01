import { Reenie_Beanie } from "next/font/google";
import Image from "next/image";
import LingamBitesSmall from "../../public/LingamBitesSmall.png";

const rb = Reenie_Beanie({ subsets: ["latin"], weight: "400" });

const NavigationBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 6rem 1rem 6rem",
      }}
    >
      <a href="/">
        <Image
          src={LingamBitesSmall}
          alt="logo for website"
          height={50}
          style={{
            cursor: "pointer",
            fontFamily: rb.style.fontFamily,
          }}
        />
      </a>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2rem",
          }}
        >
          <a href="/about">ABOUT</a>
          <a href="/recipes">RECIPES</a>
          <a href="/stores">STORES</a>
        </ul>
      </nav>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
      </div>
    </div>
  );
};

export default NavigationBar;
