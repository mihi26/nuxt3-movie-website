<template>
  <nav class="navbar">
    <NuxtLink class="navbar-item" to="/">Home Page</NuxtLink>
  </nav>
  <main>
    <slot />
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: center;
  margin-top: 40px;

  .navbar-item {
    padding: 8px 16px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    text-decoration: none;
    color: black;
  }
}
</style>