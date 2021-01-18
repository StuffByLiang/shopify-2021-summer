import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../_types/movie";

export interface NominationSliceState {
  nominations: Movie[];
  alertOpen: boolean;
}

export const nominationSlice = createSlice({
  name: "movie",
  initialState: {
    nominations: [],
    alertOpen: false,
  } as NominationSliceState,
  reducers: {
    addNomination: (state, { payload }) => {
      if (
        !state.nominations.map((movie) => movie.Title).includes(payload.Title)
      ) {
        state.nominations.push(payload);
        if (state.nominations.length == 5) {
          state.alertOpen = true;
        }
      }
    },
    removeNomination: (state, { payload }) => {
      state.nominations = state.nominations.filter((movie) => {
        return movie.Title !== payload.Title;
      });
    },
    closeAlert: (state, action) => {
      state.alertOpen = false;
    },
  },
});

export const {
  addNomination,
  removeNomination,
  closeAlert,
} = nominationSlice.actions;

export const selectNomination = (state: any): NominationSliceState =>
  state.nomination;

export default nominationSlice.reducer;
