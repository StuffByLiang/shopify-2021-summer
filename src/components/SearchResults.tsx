import React from "react";
import { addNomination, selectNomination } from "../slices/nominationSlice";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { selectMovie } from "../slices/movieSlice";
import { Typography } from "@material-ui/core";
import { Movie } from "../_types/movie";

function SearchResults({ searchQuery }: { searchQuery: string }) {
  const { movies, loading } = useSelector(selectMovie);
  const { nominations } = useSelector(selectNomination);
  const dispatch = useDispatch();

  let filteredMovies: Movie[] = [];

  if (movies) {
    filteredMovies = movies.filter((movie) => {
      return !nominations.map(({ Title }) => Title).includes(movie.Title);
    });
  }

  return (
    <>
      {movies && movies.length !== 0
        ? filteredMovies.map((movie, i) => (
            <MovieCard
              key={i}
              movie={movie}
              callback={() => dispatch(addNomination(movie))}
              buttonText="Add Nomination"
            />
          ))
        : loading === "idle" && (
            <Typography variant="body1">
              No results Found For "{searchQuery}"
            </Typography>
          )}
    </>
  );
}

export default React.memo(SearchResults);
