import { createAsyncThunk } from "@reduxjs/toolkit";
import { Location } from "./types";
import locationsService from "../../../api/services/locations.service";

export const fetchLocations = createAsyncThunk<Location[], { name: string }>(
  "locations/fetch",
  async ({ name }: { name: string }) => {
    const response = await locationsService.getLocationsByName(name);

    return response.data.results ?? [];
  }
);
