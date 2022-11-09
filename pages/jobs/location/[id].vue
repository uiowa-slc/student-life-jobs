<template>
  <main>
    <Head>
      <Title>{{ location.name }}</Title>
    </Head>

    <h1>Jobs located at "{{ location.name }}":</h1>
    <ul v-if="jobs.value">
      <li v-for="job in jobs.value.positions" :key="job.position.id">
        <NuxtLink :href="'/jobs/show/' + job.position.id">{{
          job.position.posting_title
        }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>
<script setup>
const route = useRoute();
const jobs = ref([]);
const locationFeed = ref();
const location = ref();

jobs.value = await getJobs(null, null, route.params.id);
locationFeed.value = await getLocation(route.params.id).then((result) => {
  // console.log(result);
  location.value = result.value.locations[0].location;
});
</script>