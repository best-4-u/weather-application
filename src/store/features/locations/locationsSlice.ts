import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store';
import { LocationsState } from './types';

const initialState: LocationsState = {
  list: [],
  fovouriteList: [],
}

export const locationsSlice = createSlice({
  name: 'locations',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      // state.value += 1
    },
    decrement: (state) => {
      // state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = locationsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLocations = (state: RootState) => state.locations.list;

export default locationsSlice.reducer
