import React, { useState, useEffect } from "react";
import Downshift from "downshift";
import { useDebounce } from "usehooks-ts";
import styles from "./LocationSearchInput.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchLocations } from "../../store/features/locations/fetchLocations";
import {
  setList,
  setSelectedLocation,
} from "../../store/features/locations/locationsSlice";
import { fetchWeather } from "../../store/features/weather/fetchWeather";

function LocationSearchInput() {
  const [searchInput, setSearchInput] = useState<string>("");
  const debouncedInput = useDebounce<string>(searchInput, 1000);

  const dispatch = useAppDispatch();
  const locationsList = useAppSelector((state) => state.locations.list);
  const selectedLocation = useAppSelector(
    (state) => state.locations.selectedLocation
  );

  useEffect(() => {
    if (debouncedInput.length > 0) {
      dispatch(fetchLocations({ name: debouncedInput }));
    } else {
      dispatch(setList([]));
    }
  }, [debouncedInput, dispatch]);

  return (
    <Downshift
      onStateChange={(changes) => {
        if (changes.selectedItem != null) {
          const { latitude, longitude, timezone } = changes.selectedItem;
          dispatch(setSelectedLocation(changes.selectedItem));
          dispatch(fetchWeather({ lat: latitude, lon: longitude, timezone }));
        } else if (changes.inputValue != null) {
          setSearchInput(changes.inputValue);
          dispatch(setSelectedLocation(null));
        }
      }}
      selectedItem={selectedLocation}
      itemToString={(item) => (item ? item.name : searchInput)}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        selectedItem,
        isOpen,
      }) => (
        <div className={styles.search_combobox}>
          <input
            {...getInputProps({ placeholder: "search location" })}
            className={styles.input}
          />
          <div style={{ position: "relative" }}>
            <ul {...getMenuProps()} className={styles.menu}>
              {isOpen &&
                locationsList.map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.id,
                      item,
                      index,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? "lightgray" : "white",
                        fontWeight: selectedItem === item ? "bold" : "normal",
                      },
                    })}
                  >
                    {`${item.name} (${item.country}, latitude: ${item.latitude}, longitude: ${item.longitude})`}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </Downshift>
  );
}

export default LocationSearchInput;
