<template>
  <div>
    <head>
      <Title>Search Results</Title>
    </head>
    <Header />
    <div class="container content">
      <div class="row">
        <div class="col-lg-7 pt-4 m-auto">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <NuxtLink href="/">Find a Job</NuxtLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Search Results
              </li>
            </ol>
          </nav>
          <main id="main">
            <h1>Results for "{{ route.params.term }}":</h1>
            <div v-if="jobs.length > 0">
              <JobList :jobs="jobs" />
            </div>
            <div v-else>
              <p>No results found for this search term.</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const allJobs = ref([]);
const jobs = ref([]);
// @todo: cleanup
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
});
</script>