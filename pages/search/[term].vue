<template>
  <div>
    <h1>Results for "{{ route.params.term }}":</h1>
    <div v-if="jobs">
      <JobList :jobs="jobs" />
    </div>
    <div v-else>
      <p>No results found for this search term.</p>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const allJobs = ref([]);
const jobs = ref([]);

allJobs.value = await getJobs().then((result) => {
  var results = [];
  var resultsSet = new Set();
  var positionList = result.value.positions;
  var term = route.params.term.toLowerCase();
  // var term = route.params.term;
  var jobsFilteredByTitle = positionList.filter(function (position) {
    return position.position.posting_title.toLowerCase().includes(term);
  });
  var jobsFilteredByDescription = positionList.filter(function (position) {
    return position.position.basic_job_function.toLowerCase().includes(term);
  });

  var jobsFilteredByLocation = positionList.filter(function (position) {
    //console.log(position.position.work_location.toLowerCase());
    return position.position.work_location.toLowerCase().includes(term);
  });

  results = results.concat(
    jobsFilteredByTitle,
    jobsFilteredByDescription,
    jobsFilteredByLocation
  );
  results.forEach((item) => {
    resultsSet.add(item);
  });

  jobs.value = [...resultsSet];
  // console.log("jobs.value");
  // console.log(jobs.value);

  // console.log("filtered by title:");
  // console.log(jobsFilteredByTitle);

  // console.log("filtered by desc:");
  // console.log(jobsFilteredByDescription);
  // positionList.forEach((element, index, array) => {
  //   if (element.position.posting_title.includes(term)) {
  //     results.value.push(element);
  //   }
  // });

  // return positionList.filter((job) =>
  //   Object.values(job).some((val) => String(val).toLowerCase().includes(term))
  // );
});
// function filteredResults(search) {
//   var lowSearch = search.toLowerCase();
//   return wines.filter((wine) =>
//     Object.values(wine).some((val) =>
//       String(val).toLowerCase().includes(lowSearch)
//     )
//   );
// }
//console.log(results.value);
</script>