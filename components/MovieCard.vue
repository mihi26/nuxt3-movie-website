<template>
  <div class="card-container">
    <NuxtLink :to="`/movie/${movie?.id}`" class="card-poster-container">
      <img class="card-poster" :src="imgUrl" alt="Movie Poster" />
    </NuxtLink>
    <div class="card-title">{{ movie?.title }}</div>
    <p class="card-overview">{{ movie?.overview }}</p>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { Movie } from "~~/types/Movie";

const props = defineProps({
  movie: {
    type: Object as PropType<Movie>,
  },
});

const config = useRuntimeConfig();
const imgUrl = computed(() =>
  props.movie?.poster_path
    ? `${config.public.imgBaseUrl}/${props.movie.poster_path}`
    : "https://via.placeholder.com/300x500"
);
</script>
<style lang="scss" scoped>
.card-container {
  height: 32rem;
  width: 256px;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  text-align: center;

  .card-poster-container {
    margin-bottom: 20px;
    display: inline-block;
    background-color: rgb(34 197 94);
    height: 70%;
  }

  .card-poster {
    width: 100%;
    height: 100%;
    &:hover {
      transform: translate(24px, -24px);
      transition-delay: 50ms;
      transition-duration: 100ms;
      display: inline-block;
    }
  }

  .card-title {
    font-size: 18px;
    line-height: 28px;
  }

  .card-overview {
    color: rgb(107 114 128);
    overflow-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 2px;
  }
}
</style>
