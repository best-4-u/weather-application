export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id?: number;
  timezone: string;
  population?: number;
  country_id: number;
  country: string;
  admin1: string;
  admin2?: string;
  admin3_id?: number;
  postcodes?: string[];
  admin3?: string;
}

export interface LocationApiRes {
  results?: Location[];
  generationtime_ms: number;
}

export interface LocationsState {
  list: Location[];
  favouriteList: Location[];
  status: "idle" | "loading" | "loaded";
  selectedLocation: Location | null;
}
