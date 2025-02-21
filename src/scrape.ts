const url = "https://kassal.app/api/v1";

type Position = {
  lat: string;
  lng: string;
};

type OpeningHours = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
};

type PhysicalStore = {
  id: number;
  group: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  fax: string;
  logo: string;
  website: string;
  detailUrl: string;
  position: Position;
  openingHours: OpeningHours;
};

type FetchStore = {
  data: PhysicalStore[];
};

const stores = [
  "MENY Vestkanten",
  "REMA 1000 KJERREIDVIKEN",
  "Joker Vestkanten",
  "Obs Vestkanten",
  "KIWI 886 Oasen",
];

// Near Vestkanten
// in the future maybe take an input for this from the user, e.g. a zip code or place
// then calculate/find the lat and lng from that
const lat = 60.3631228565944;
const lng = 5.233547625733572;

export const fetchStores = async () => {
  const response = await fetch(
    `${url}/physical-stores?lat=${lat}&lng=${lng}&size=100&km=100`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_KASSAL_API_KEY}`,
      },
    }
  );

  const data = (await response.json()) as FetchStore;
  const filteredStores = data.data.filter((store) =>
    stores.includes(store.name)
  );

  return filteredStores;
};
