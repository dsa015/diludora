import Image from "next/image";
import Link from "next/link";
import styles from "./NavigationBar.module.scss";
import { Roboto } from "next/font/google";

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
          src={"/LingamBitesSmall.png"}
          alt="logo for website"
          height={50}
          width={200}
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
      </ul>

      <div className={styles.logoContainer}>
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
      </div>
    </nav>
  );
};

export default NavigationBar;
