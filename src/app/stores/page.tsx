import { fetchStores } from "@/scrape";
import Image from "next/image";
import styles from "./Stores.module.scss";

type StoresILike = {
  name: string;
  website: string;
  logo: string;
  discounts?: string;
};

const StoreList = ({ storesNearMe }: { storesNearMe: StoresILike[] }) => {
  return (
    <ul className={styles.storeList}>
      {storesNearMe.map((store, index) => (
        <li key={index}>
          <a href={store.website} className={styles.store}>
            <Image src={store.logo} width={100} height={100} alt={store.name} />
            {store.name}
          </a>
          {store.discounts && (
            <a href={store.discounts}>Discounts this week!</a>
          )}
        </li>
      ))}
    </ul>
  );
};

// etilbudsavis
//AHlwO6mR - coop
//vXzfg4hB - rema

const Stores = async () => {
  const stores = await fetchStores();

  return (
    <>
      <section>
        <h1>Where to buy stuff?</h1>
        <p>
          Usually your nearest grocery store is your best bet. But I can list a
          few of them here, where I go
        </p>
        <p>
          Remember to follow on discounts! It&apos;s super important. Down here
          are this weeks discounts for each store
        </p>
      </section>
      <StoreList storesNearMe={stores} />
    </>
  );
};
export default Stores;
