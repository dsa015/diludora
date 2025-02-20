import { fetchStores } from "@/scrape";

const StoreList = ({ names, links }: { names: string[]; links: string[] }) => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={name}>
          <a href={links[index]}>{name}</a>
        </li>
      ))}
    </ul>
  );
};

const Stores = async () => {
  const s = await fetchStores();
  const { data } = s;
  const storeNames = data.map((store) => store.name);
  const storeLinks = data.map((store) => store.website);

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
      <StoreList names={storeNames} links={storeLinks} />
    </>
  );
};
export default Stores;
