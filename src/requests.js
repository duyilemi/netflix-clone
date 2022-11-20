const KEY = process.env.API_KEY || "3a541256ccbeb7d946e75a90d19fd272";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${KEY}&language=en-US`,
  fetchOriginals: `/discover/tv?api_key=${KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${KEY}&with_genres=99`,
};

export default requests;
