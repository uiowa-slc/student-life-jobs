export const getDepartments = async () => {
  const config = useRuntimeConfig();
  const feedBase = config.public.apiBase;
  // const feedUrl = feedBase + "feed/departments.json";

  var feedUrl;
  if (process.env.NODE_ENV == "development") {
    feedUrl =
      "https://spock.imu.uiowa.edu/student-life-jobs/api/departments.json";
  } else {
    feedUrl = feedBase + "feed/departments.json";
  }

  // console.log(feedUrl);
  const { data: feed } = await useFetch(feedUrl, { key: feedUrl });
  //console.log(feedBase + "feed/positions.json");
  return feed;
};
