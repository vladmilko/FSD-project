import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types/SaveScrollPosition';

const initialState: ScrollSchema = {};

export const saveScrollPositionSlice = createSlice({
  name: 'scrollPosition',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>,
    ) => {
      state[payload.path] = payload.position;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: scrollPositionActions } = saveScrollPositionSlice;
export const { reducer: scrollPositionReducer } = saveScrollPositionSlice;
