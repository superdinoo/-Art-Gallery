import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actionLight: false,
};

const mainLightSlice = createSlice({
  name: "mainLightSlice",
  initialState,
  reducers: {
    setLightAction: (state) => {
      return {
        ...state,
        actionLight: !state.actionLight,
      };
    },
  },
});

export const { setLightAction } = mainLightSlice.actions;

export default mainLightSlice.reducer;
