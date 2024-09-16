import Link from "next/link";
import styles from "./NavigationBar.module.scss";
import { Roboto } from "next/font/google";
//import { SearchComponent } from "../search-component/SearchComponent";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const NavigationBar = () => {
  return (
    <nav
      className={styles.navBarContainer}
      style={{
        fontFamily: roboto.style.fontFamily,
      }}
    >
      <div className={styles.legend}>
        <Link href={"/"}>
          <h1 className={styles.legend}>DiluDora</h1>
        </Link>
      </div>
      <ul className={styles.navList}>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/recipes">RECIPES</Link>
        </li>
        <li>
          <Link href="/stores">STORES</Link>
        </li>{" "}
        <li>
          <Link href="/login">LOGIN</Link>
        </li>
        {/* <SearchComponent /> */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
