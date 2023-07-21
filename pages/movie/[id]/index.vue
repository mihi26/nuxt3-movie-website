<template>
  <div class="page-movie-detail-container">
    <div class="movie-detail-container">
      <div class="movie-poster-container">
        <img class="movie-poster" :src="imgUrl" alt="Movie Poster" />
      </div>
      <div class="movie-content-container">
        <div class="movie-title">{{ data?.title }}</div>
        <div class="movie-genre-wrapper">
          <div
            v-for="genre in data?.genres"
            class="movie-genre"
            :key="genre.id"
          >
            {{ genre.name }}
          </div>
        </div>
        <div class="movie-release-date">
          Release Date: {{ data?.release_date }}
        </div>
        <div class="movie-duration">Duration: {{ data?.runtime }}</div>
        <p class="movie-overview">{{ data?.overview }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Movie } from "~~/types/Movie";

const route = useRoute();
const config = useRuntimeConfig();
const movieId = computed(() => route.params.id);

const { data } = await useFetch<Movie>(`/api/movies/${movieId.value}`);

const imgUrl = computed(() =>
  data.value?.poster_path
    ? `${config.public.imgBaseUrl}/${data.value.poster_path}`
    : "https://via.placeholder.com/300x500"
);
</script>
<style lang="scss" scoped>
.page-movie-detail-container {
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  margin-top: 40px;

  .movie-detail-container {
    display: grid;
    grid-template-columns: repeat(7, mimax(0, 1fr));
    gap: 4px;

    .movie-poster-container {
      width: 256px;
      height: 300px;
      .movie-poster {
        grid-column: span 2 / span 2;
      }
    }

    .movie-content-container {
      display: flex;
      flex-direction: column;
      grid-column: span 3 / span 3;

      .movie-title {
        font-size: 36px;
        line-height: 40px;
        font-weight: 700;
        margin-bottom: 20px;
      }

      .movie-genre-wrapper {
        display: flex;
      }

      .movie-genre {
        padding: 8px 16px;
        background-color: rgb(229 231 235);
        color: rgb(31 41 55);
        border-radius: 4px;
        margin-right: 8px;
        margin-bottom: 8px;
      }

      .movie-release-date,
      .movie-duration {
        font-size: 18px;
        line-height: 28px;
      }

      .movie-release-date {
        margin-top: 8px;
        margin-bottom: 8px;
      }

      .movie-duration {
        margin-bottom: 8px;
      }
      .movie-overview {
        color: rgb(75 85 99);
      }
    }
  }
}
</style>
