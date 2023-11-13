// pagesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for your page names
export type T_PageName = "home" | "top-posts" | "create" | "top-looks" | "profile";

// Define the initial state for the active page
const initialState: { value: T_PageName } = {
  value: "home",
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<T_PageName>) => {
      state.value = action.payload;
    },
  },
});

export const { setPage } = pagesSlice.actions;

export const selectActivePage = (state: RootState) => state.page.value;

export default pagesSlice.reducer;
