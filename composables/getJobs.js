export const getJobs = async (category, department, location) => {
  const config = useRuntimeConfig();
  const feedBase = config.public.apiBase;
  var feedUrl = feedBase + "feed/positions.json?open=true";
  var feedParams = "";

  // LOAD CACHED VERSION OF OPEN JOBS FOR YOUR SANITY DURING DEV:
  // (OTHERWISE TAKES 20+ SECONDS TO LOAD)

  if (process.env.NODE_ENV == "development") {
    if (!category && !department && !location) {
      feedUrl =
        "https://spock.imu.uiowa.edu/student-life-jobs/api/open-jobs.json";
    }
  }

  if (category) {
    feedParams += "&category_id=" + category;
  }

  if (department) {
    feedParams += "&department_id=" + department;
  }
  if (location) {
    feedParams += "&location_id=" + location;
  }
  feedUrl += feedParams;
  //console.log(feedUrl);
  const { data: feed } = await useFetch(feedUrl, { key: feedUrl });
  //console.log(feedBase + "feed/positions.json");
  return feed;
};
