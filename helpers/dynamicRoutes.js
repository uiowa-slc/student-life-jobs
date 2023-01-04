async function getJobs() {
  const feedUrl =
    "https://apps.studentlife.uiowa.edu/seo/feed/positions.json?open=true";
  //const feedUrl = 'https://spock.imu.uiowa.edu/student-life-jobs/api/open-jobs.json'
  const response = await fetch(feedUrl, { mode: "cors" });
  return response.json();
}

export default async () => {
  const routes = [];
  const jobs = await getJobs();

  jobs.positions.forEach((job) => {
    routes.push({
      url: "jobs/show/" + job.position.id,
      lastmod: job.position.job_posting_start_date,
    });
  });

  //console.log(routes);
  return routes;
};
