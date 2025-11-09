const API_KEY = "353b3fe250fffa8c8d18557981473ade";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

export const getNowPlayingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};
export const getTopRatedMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieVideos = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.json();
};
