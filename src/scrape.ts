const url = "https://kassal.app/api/v1";

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
  position: {
    lat: string;
    lng: string;
  };
  openingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
};

type FetchStore = {
  data: PhysicalStore[];
};

export const fetchStores = async () => {
  const response = await fetch(
    `${url}/physical-stores?size=100&group=REMA_1000`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_KASSAL_API_KEY}`,
      },
    }
  );
  const data = (await response.json()) as FetchStore;

  return data;
};
