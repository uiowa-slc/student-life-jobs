<template>
  <div>
    <Head>
      <Title>{{ location.name }}</Title>
    </Head>
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
                Location: {{ location.name }}
              </li>
            </ol>
          </nav>
          <main id="main">
            <h1>{{ location.name }}</h1>
            <p>The following open jobs are located at {{ location.name }}:</p>
            <JobList :jobs="jobs.value.positions" />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const jobs = ref([]);
const locationFeed = ref();
const location = ref();

jobs.value = await getJobs(null, null, route.params.id);
locationFeed.value = await getLocation(route.params.id).then((result) => {
  console.log(result);
  location.value = result.value.locations[0].location;
});
</script>