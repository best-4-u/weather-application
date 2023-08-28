import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocationsState, Location } from "./types";
import { fetchLocations } from "./fetchLocations";

const initialState: LocationsState = {
  list: [],
  fovouriteList: [],
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

export const { setList, setSelectedLocation } = locationsSlice.actions;

export default locationsSlice.reducer;
