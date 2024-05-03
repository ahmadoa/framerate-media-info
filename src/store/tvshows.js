import { defineStore } from "pinia";
import { ref } from "vue";

export const useTvShowsStore = defineStore("TvShows", () => {
  const PopularSeries = ref([]);
  const AiringTodaySeries = ref([]);
  const UpcomingSeries = ref([]);
  const AllTrendingMedia = ref([]);

  // fetch popular series
  const getPopularSeries = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&page=1`
      );
      const data = await response.json();
      PopularSeries.value = data.results;
    } catch (error) {
      console.error(error);
    }
  };

  // fetch airing today series
  const getAiringTodaySeries = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&page=1`
      );
      const data = await response.json();
      AiringTodaySeries.value = data.results;
    } catch (error) {
      console.error(error);
    }
  };

  // fetch upcoming series
  const getUpcomingSeries = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&page=1`
      );
      const data = await response.json();
      UpcomingSeries.value = data.results;
    } catch (error) {
      console.error(error);
    }
  };

  // fetch all trending media
  const getAllTrendingMedia = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }`
      );
      const data = await response.json();
      AllTrendingMedia.value = data.results;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    PopularSeries,
    AiringTodaySeries,
    UpcomingSeries,
    AllTrendingMedia,
    getPopularSeries,
    getAiringTodaySeries,
    getUpcomingSeries,
    getAllTrendingMedia,
  };
});
