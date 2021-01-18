import React, { useEffect, useState } from "react";
import "./App.css";

import {
  Link,
  Container,
  ThemeProvider,
  createMuiTheme,
  InputBase,
  Paper,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";

import useDebounce from "./hooks/useDebounce";
import SearchResults from "./components/SearchResults";
import { getMovies } from "./slices/movieSlice";
import { useDispatch } from "react-redux";
import Nominations from "./components/Nominations";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#090979",
    },
    secondary: {
      main: "#00d4ff",
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {},
  searchBar: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginLeft: "5px",
  },
  iconButton: {
    padding: 10,
  },
  formControl: {
    alignItems: "left",
  },
  loadingBar: {
    padding: "15px 0",
  },
}));

function App() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearch = useDebounce(searchQuery, 150);

  useEffect(() => {
    dispatch(getMovies(debouncedSearch));
  }, [debouncedSearch]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box className="gradient" pb={5}>
          <Container>
            <div className="center">
              <Typography variant="h1">The Shoppies</Typography>
              <p>
                <code>Movie awards for entrepreneurs</code>
              </p>
            </div>
            <Paper elevation={7} className={classes.root}>
              <Box className={classes.searchBar}>
                <SearchIcon color="secondary" />
                <InputBase
                  className={classes.input}
                  fullWidth
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Movie"
                  inputProps={{ "aria-label": "search-movie" }}
                />
              </Box>
            </Paper>
          </Container>
        </Box>
        <Container className="center">
          <Grid container spacing={3} style={{ paddingTop: 25 }}>
            <Grid item xs={6}>
              <Typography variant="h4" align="left">
                Search Results
              </Typography>
              <SearchResults searchQuery={searchQuery} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" align="right">
                Nominations
              </Typography>
              <Nominations />
            </Grid>
          </Grid>
        </Container>
        <footer>
          <Link className="links" href="https://github.com/StuffByLiang/">
            Github
          </Link>
          <Link
            className="links"
            href="https://www.linkedin.com/in/liang-liu-2001/"
          >
            Linkedin
          </Link>
          <br />
          Made with love by{" "}
          <Link href="https://stuffbyliang.com">David (Liang)</Link>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
