export const getLocations = async () => {
  const config = useRuntimeConfig();
  const feedBase = config.API_BASE_URL;
  // var feedUrl = feedBase + "feed/locations.json";
  var feedUrl;
  if (process.env.NODE_ENV == 'development') {
    feedUrl =
      "https://spock.imu.uiowa.edu/student-life-jobs/api/locations.json";
  } else {
    feedUrl = feedBase + "feed/locations.json";
  }

  console.log(feedUrl);
  const { data: feed } = await useFetch(feedUrl, { key: feedUrl });
  // console.log(feed);
  //console.log(feedBase + "feed/positions.json");
  return feed;
};
