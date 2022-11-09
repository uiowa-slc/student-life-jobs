export const getCategory = async (id) => {
  const config = useRuntimeConfig();
  const feedBase = config.API_BASE_URL;
  const feedUrl = feedBase + "feed/categories.json?id=" + id;

  const { data: feed } = await useFetch(feedUrl, { key: id });
  //console.log(feedBase + "feed/positions.json");
  return feed;
};
