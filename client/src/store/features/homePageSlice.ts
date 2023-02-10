import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "../../types/homePageSliceTypes";

const initialState: IHomePageState = {
  collection: [],
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setCollection: (state, action) => {
      state.collection = action.payload;
    },
  },
});

export const { setCollection } = homePageSlice.actions;

export default homePageSlice.reducer;
