<template>
  <div class="w-full h-full grid grid-rows-12 place-justify-center px-10">
    <div class="row-span-9 flex flex-col relative rounded-2xl overflow-hidden">
      <img
        :src="base_url + LatestMovie.backdrop_path"
        class="w-full h-full object-cover absolute bg-center"
      />
      <div
        class="w-full h-full bg-gradient-to-b from-transparent to-black/90 bg-transparent absolute"
      ></div>
    </div>
    <div class="row-span-3"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useMoviesStore } from "@/store/movies";

const moviesStore = useMoviesStore();
const { getLatestMovie } = moviesStore;

const base_url = "https://image.tmdb.org/t/p/original";

const LatestMovie = ref([]);

onMounted(async () => {
  await getLatestMovie();
  LatestMovie.value = moviesStore.LatestMovie;
});
</script>

<style scoped>
/* Add your component's styles here */
</style>
