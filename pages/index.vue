<template>
  <div class="page-container">
    <h2 class="page-title">Nuxt 3 Movie App</h2>
    <div class="page-input-container">
      <input
        class="page-input"
        v-model="searchTerm"
        type="text"
        placeholder="Search your movie..."
      />
    </div>
    <div class="page-movies-container">
      <div v-for="movie in data?.results" :key="movie.id">
        <MovieCard :movie="movie" />
      </div>
    </div>
    <div class="pagination-wrapper" v-if="data?.results.length">
      <button
        @click="handlePagination('prev')"
        :disabled="isDisablePrev"
        class="pagination-button"
      >
        Previous
      </button>
      <div class="pagination-page">{{ currentPage }}</div>
      <button
        @click="handlePagination('next')"
        :disabled="isDisableNext"
        class="pagination-button"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { APIResponse } from "~~/types/APIResponse";

const searchTerm = ref("");
const currentPage = ref(1);

const url = computed(() => {
  return `api/movies/search?query=${searchTerm.value}&page=${currentPage.value}`;
});

const { data } = await useFetch<APIResponse>(url);

const isDisablePrev = computed(() => {
  return currentPage.value == 1;
});

const isDisableNext = computed(() => {
  if (data.value?.total_pages)
    return data.value?.total_pages > 1000
      ? currentPage.value == 1000
      : currentPage.value >= data.value?.total_pages;
  return true;
});

const handlePagination = (type: string) => {
  if (type == "prev") {
    currentPage.value--;
  } else currentPage.value++;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  .page-title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    text-align: center;
  }

  .page-input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    .page-input {
      padding: 4px 8px;
      border: 1px solid #dbdbdb;
      border-radius: 6px;
      min-width: 256px;
      outline: none;
    }
  }

  .page-movies-container {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    align-self: center;
    gap: 40px;
    margin: 40px 0;
  }

  .pagination-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .pagination-button {
      padding: 8px 16px;
      border: 1px solid #dbdbdb;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>
