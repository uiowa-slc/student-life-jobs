<template>
  <main>
    <Head>
      <Title>{{ dept.name }}</Title>
    </Head>

    <h1>Jobs in the department "{{ dept.name }}":</h1>
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
const deptFeed = ref();
const dept = ref();

jobs.value = await getJobs(null, route.params.id);
deptFeed.value = await getDepartment(route.params.id).then((result) => {
  // console.log(result);
  dept.value = result.value.departments[0].department;
});
</script>