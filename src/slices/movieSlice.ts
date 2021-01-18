import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../utils/requests/movies";
import { Movie } from "../_types/movie";

export interface MovieSliceState {
  movies: Movie[];
  loading: string;
}

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (search: string, thunkAPI) => {
    const movies = await fetchMovies(search);
    return movies;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    loading: "idle",
  } as MovieSliceState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = "idle";
      });
  },
});

// export const { moviesLoading, moviesRecieved } = movieSlice.actions;

export const selectMovie = (state: any): MovieSliceState => state.movie;

export default movieSlice.reducer;
