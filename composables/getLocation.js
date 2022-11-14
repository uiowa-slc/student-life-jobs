export const getLocation = async (id) => {
  const config = useRuntimeConfig();
  const feedBase = config.API_BASE_URL;
  const feedUrl = feedBase + "feed/locations.json?id=" + id;
  // console.log(feedUrl);
  const { data: feed } = await useFetch(feedUrl, { key: feedUrl });
  //console.log(feedBase + "feed/positions.json");
  return feed;
};
