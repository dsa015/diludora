import { getListOfStores, ScrapedStore } from "@/puppeteer";

const StoreList = ({ names, links, images }: ScrapedStore) => {
  const storeToLink = names.map((name, index) => {
    return {
      [name]: `https://mattilbud.no${links[index]}`,
    };
  });

  return (
    <ul>
      {storeToLink.map((store, index) => {
        const storeName = Object.keys(store)[0];
        const storeLink = Object.values(store)[0];
        return (
          <li key={index}>
            <a href={storeLink} target="_blank" rel="noreferrer">
              <img src={images[index]} alt={storeName} />
              <h2>{storeName}</h2>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Stores = async () => {
  const stores = await getListOfStores();
  // extract the store names
  const storeNames = stores.map((store) => store.name);
  const storeLinks = stores.map((store) => store.link);
  const storeImages = stores.map((store) => store.img);

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
      <StoreList names={storeNames} links={storeLinks} images={storeImages} />
    </>
  );
};

export default Stores;
