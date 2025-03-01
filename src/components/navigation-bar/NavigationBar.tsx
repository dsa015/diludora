import Link from "next/link";
import styles from "./NavigationBar.module.scss";
import { Roboto } from "next/font/google";
//import { SearchComponent } from "../search-component/SearchComponent";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });
const navBarLinks = [
  { name: "ABOUT", path: "/about" },
  { name: "RECIPES", path: "/recipes" },
  { name: "STORES", path: "/stores" },
  { name: "LOGIN", path: "/login" },
];

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
        {navBarLinks.map((link) => (
          <li key={link.name} className={styles.navItem}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
        {/* <SearchComponent /> */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
