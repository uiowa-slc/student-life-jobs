export const getCategories = async () => {
  const config = useRuntimeConfig();
  const feedBase = config.API_BASE_URL;
  // const feedUrl = feedBase + "feed/categories.json";

  var feedUrl;
  if (process.env.NODE_ENV == 'development') {
    feedUrl =
      "https://spock.imu.uiowa.edu/student-life-jobs/api/categories.json";
  } else {
    feedUrl = feedBase + "feed/categories.json";
  }
  console.log(feedUrl);
  const { data: feed } = await useFetch(feedUrl, { key: feedUrl });
  //console.log(feedBase + "feed/positions.json");
  return feed;
};
