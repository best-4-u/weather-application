import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSelectedLocation } from "../../store/features/locations/locationsSlice";
import styles from "./FavouriteListSelect.module.scss";

function FavouriteListSelect(): JSX.Element {
  const favouriteList = useAppSelector(
    (state) => state.locations.favouriteList
  );
  const [localLocation, setLocalLocation] = useState<string>("");
  const dispatch = useAppDispatch();

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setLocalLocation(value);
    
    const findLocation = favouriteList.find(
      (item) => item.id.toString() === event.target.value
    );
    if (findLocation !== undefined) dispatch(setSelectedLocation(findLocation));
  };

  return (
    <select
      onChange={onSelect}
      value={localLocation}
      className={styles.favourite_list}
    >
      <option disabled value="">Favourites...</option>
      {favouriteList.map((item) => (
        <option key={item.id} value={item.id}>
          {`${item.name} (${item.country})`}
        </option>
      ))}
    </select>
  );
}

export default FavouriteListSelect;
