// pwaSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface PwaState {
  isOpenedInPwa: boolean;
}

const initialState: PwaState = {
  isOpenedInPwa: window.matchMedia("(display-mode: standalone)").matches,
};

const pwaSlice = createSlice({
  name: "pwa",
  initialState,
  reducers: {
    setPwaStatus: (state, action: PayloadAction<boolean>) => {
      state.isOpenedInPwa = action.payload;
    },
  },
});

export const { setPwaStatus } = pwaSlice.actions;

export const selectPwaStatus = (state: RootState) => state.pwa.isOpenedInPwa;

export default pwaSlice.reducer;
