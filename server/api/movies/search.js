export default defineEventHandler((event) => {
  const {query} = getQuery(event)
  const config = useRuntimeConfig()
  return $fetch(`${config.apiBaseUrt}/search/movies?query=${query}`, {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${config.apiKey}`
    }
  })
})