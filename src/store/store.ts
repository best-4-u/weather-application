import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from "./features/weather/weatherSlice";
import locationsReducer from "./features/locations/locationsSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    locations: locationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
