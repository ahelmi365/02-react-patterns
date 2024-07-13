import { IListing } from "../container/ListingsContainer";
import { Listing } from "./Listing";
import { ListingsGrid } from "./ListingsGrid";

export default function Listings(props: { listings: IListing[] }) {
  return (
    <ListingsGrid>
      {props.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
