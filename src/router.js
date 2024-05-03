import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomePage.vue";
import AllMoviesView from "@/views/AllMovies.vue";
import AllTvShowsView from "@/views/AllTvShows.vue";
import MediaDetailView from "@/views/MediaDetail.vue";
import FavoritesView from "@/views/FavoritesPage.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/movies", component: AllMoviesView },
  { path: "/tv-shows", component: AllTvShowsView },
  { path: "/media/:id", component: MediaDetailView },
  { path: "/favorites", component: FavoritesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
