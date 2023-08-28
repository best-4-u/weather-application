import { store } from "../../../store";
import {
  setList,
  setSelectedLocation,
  addToFavouriteList,
  removeFromFavouriteList,
} from "../locationsSlice";
import { Location } from "../types";

describe("locationsSlice", () => {
  const mockLocation: Location = {
    id: 1,
    name: "London",
    latitude: 51.50853,
    longitude: -0.12574,
    elevation: 25.0,
    feature_code: "PPLC",
    country_code: "GB",
    admin1_id: 6269131,
    admin2_id: 2648110,
    timezone: "Europe/London",
    population: 7556900,
    country_id: 2635167,
    country: "United Kingdom",
    admin1: "England",
    admin2: "Greater London",
  };

  test("adds location to list", () => {
    let state = store.getState().locations;
    expect(state.list).toHaveLength(0);

    store.dispatch(setList([mockLocation]));

    state = store.getState().locations;
    expect(state.list).toHaveLength(1);
    expect(state.list).toMatchObject([mockLocation]);
  });

  test("selects location", () => {
    let state = store.getState().locations;
    expect(state.selectedLocation).toBe(null);

    store.dispatch(setSelectedLocation(mockLocation));

    state = store.getState().locations;
    expect(state.selectedLocation).toMatchObject(mockLocation);
  });

  test("adds location to favourite list and removes it", () => {
    let state = store.getState().locations;
    expect(state.favouriteList).toHaveLength(0);

    store.dispatch(addToFavouriteList(mockLocation));

    state = store.getState().locations;
    expect(state.favouriteList).toHaveLength(1);
    expect(state.favouriteList).toEqual([mockLocation]);

    store.dispatch(removeFromFavouriteList(mockLocation.id));

    state = store.getState().locations;
    expect(state.favouriteList).toHaveLength(0);
  });
});
