import axios from "axios";

export const fetchMovies = async (search: string) => {
  let { data } = await axios.get("https://www.omdbapi.com/", {
    params: {
      apikey: "b19a27f2",
      s: search,
    },
  });
  return data.Search;
};
