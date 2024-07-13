import React from "react";
import Listings from "../presentational/Listings";

export interface IListing {
  id: string;
  name: string;
  city: string;
  rooms: number;
  floors: number;
  price: number;
  sqft: number;
  state: string;
  image: string;
}

export default function ListingsContainerComponent() {
  // 1. Render the Listings component and pass the fetched data.
  const [data, setData] = React.useState<null | { listings: IListing[] }>(null);
  React.useEffect(() => {
    fetch("https://house-lydiahallie.vercel.app/api/listings")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (!data) return null;

  return <Listings listings={data.listings} />;
}
