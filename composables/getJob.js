export const getJob = async (id) => {
  const config = useRuntimeConfig();
  const feedBase = config.API_BASE_URL;
  const feedUrl = feedBase + "feed/positions.json?id=" + id;
  console.log(feedUrl);
  const { data: feed } = await useFetch(feedUrl, { key: id });
  //console.log(feedBase + "feed/positions.json");
  return feed;
};
