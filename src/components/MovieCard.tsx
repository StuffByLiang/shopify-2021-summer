import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Link,
} from "@material-ui/core";
import { Movie } from "../_types/movie";

interface Props {
  movie: Movie;
  callback: () => void;
  buttonText: string;
}

function MovieCard({ movie, callback, buttonText }: Props) {
  return (
    <Box mt={2}>
      <Card elevation={3} style={{ display: "flex" }}>
        {movie.Poster !== "N/A" && (
          <img
            src={movie.Poster}
            alt={movie.Title}
            style={{ width: "150px", height: "auto" }}
          />
        )}
        <CardContent
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <Link
            color="inherit"
            href={`https://www.imdb.com/title/${movie.imdbID}`}
          >
            <Typography component="h3" style={{ fontWeight: "bold" }}>
              {movie.Title}
            </Typography>
          </Link>
          <Typography component="h4">{`Year: ${movie.Year}`}</Typography>
          <Button
            className="gradient"
            color="primary"
            variant="contained"
            size="small"
            style={{ marginTop: "auto", width: "100%" }}
            onClick={callback}
          >
            {buttonText}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MovieCard;
