import Image from "next/image";
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
      <Link href={"/"}>
        <Image
          src={"/lb.png"}
          alt="logo for website"
          width={300}
          height={150}
        />
      </Link>
      <ul className={styles.navList}>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/recipes">RECIPES</Link>
        </li>
        <li>
          <Link href="/stores">STORES</Link>
        </li>
        <li>
          <Link href="/login">LOGIN</Link>
        </li>
        {/* <SearchComponent /> */}
      </ul>
      {/* <div className={styles.logoContainer}>
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
      </div> */}
    </nav>
  );
};

export default NavigationBar;
