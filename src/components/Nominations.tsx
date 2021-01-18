import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNomination, selectNomination } from "../slices/nominationSlice";
import { Movie } from "../_types/movie";
import MovieCard from "./MovieCard";
import NominationsAlert from "./NominationsAlert";

function Nominations() {
  const dispatch = useDispatch();
  const { nominations } = useSelector(selectNomination);

  return (
    <div>
      {nominations &&
        nominations.map((movie: Movie, i: number) => (
          <MovieCard
            key={i}
            movie={movie}
            callback={() => dispatch(removeNomination(movie))}
            buttonText="Remove"
          />
        ))}
      <NominationsAlert />
    </div>
  );
}

export default React.memo(Nominations);
