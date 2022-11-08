export const getJobs = async () => {
  const config = useRuntimeConfig();
  const feedBase = config.API_BASE_URL;
  //const feedUrl = feedBase + "feed/positions.json";;
  const feedUrl =
    "https://spock.imu.uiowa.edu/student-life-jobs/api/open-jobs.json";

  const { data: feed } = await useFetch(feedUrl, { key: feedUrl });
  //console.log(feedBase + "feed/positions.json");
  return feed;
};
