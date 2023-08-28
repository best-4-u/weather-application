import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocationsState, Location } from "./types";
import { fetchLocations } from "./fetchLocations";

const initialState: LocationsState = {
  list: [],
  favouriteList: [],
  status: "idle",
  selectedLocation: null,
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Location[]>) => {
      state.list = action.payload;
    },
    setSelectedLocation: (state, action: PayloadAction<Location | null>) => {
      state.selectedLocation = action.payload;
    },
    addToFavouriteList: (state, action: PayloadAction<Location>) => {
      state.favouriteList.push(action.payload);
    },
    removeFromFavouriteList: (state, action: PayloadAction<number>) => {
      state.favouriteList = state.favouriteList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchLocations.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchLocations.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
  },
});

export const {
  setList,
  setSelectedLocation,
  addToFavouriteList,
  removeFromFavouriteList,
} = locationsSlice.actions;

export default locationsSlice.reducer;
