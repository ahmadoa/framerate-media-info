import { defineStore } from "pinia";
import { ref } from "vue";

export const useMoviesStore = defineStore("Movies", () => {
  const LatestMovie = ref({});
  const UpcomingMovies = ref([]);
  const PopularMovies = ref([]);
  const NowPlayingMovies = ref([]);

  // fetch one latest movie
  const getLatestMovie = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&page=1`
      );
      const data = await response.json();
      LatestMovie.value = data.results[0];
    } catch (error) {
      console.error(error);
    }
  };

  // fetch upcoming movies
  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&page=1`
      );
      const data = await response.json();
      UpcomingMovies.value = data.results;
    } catch (error) {
      console.error(error);
    }
  };

  // fetch Popular Movies
  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&page=1`
      );
      const data = await response.json();
      PopularMovies.value = data.results;
    } catch (error) {
      console.error(error);
    }
  };

  // fetch now playing movies
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&page=1`
      );
      const data = await response.json();
      NowPlayingMovies.value = data.results;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    LatestMovie,
    UpcomingMovies,
    PopularMovies,
    NowPlayingMovies,
    getLatestMovie,
    getUpcomingMovies,
    getPopularMovies,
    getNowPlayingMovies,
  };
});
