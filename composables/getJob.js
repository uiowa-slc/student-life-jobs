export const getJob = async (id) => {
  const config = useRuntimeConfig();
  const feedBase = config.public.apiBase;
  const feedUrl = feedBase + "feed/positions.json?id=" + id;
  //console.log(feedUrl);
  const { data: feed, error } = await useFetch(feedUrl, { key: feedUrl });

  if (error) {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
  }
  //console.log(feedBase + "feed/positions.json");
  return feed;


};
