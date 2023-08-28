import React, { useState, useEffect } from "react";
import Downshift from "downshift";
import { useDebounce } from "usehooks-ts";
import styles from "./LocationSearchInput.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchLocations } from "../../store/features/locations/fetchLocations";
import {
  selectLocationsList,
  setList,
  setSelectedLocation,
} from "../../store/features/locations/locationsSlice";
import { Location } from "../../store/features/locations/types";

function LocationSearchInput() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [tempLocation, setTempLocation] = useState<Location | null>(null);

  const debouncedInput = useDebounce<string>(searchInput, 1000);

  const dispatch = useAppDispatch();
  const locationsList = useAppSelector(selectLocationsList);

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
          dispatch(setSelectedLocation(changes.selectedItem));
          setTempLocation(changes.selectedItem);
        } else if (changes.inputValue != null) {
          setSearchInput(changes.inputValue);
          setTempLocation(null);
        }
      }}
      selectedItem={tempLocation}
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
            {...getInputProps({ placeholder: "Search for the location" })}
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
