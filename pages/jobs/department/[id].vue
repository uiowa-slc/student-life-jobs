<template>
  <main>
    <Head>
      <Title>{{ dept.name }}</Title>
    </Head>

    <h1>Jobs in the department "{{ dept.name }}":</h1>
    <JobList :jobs="jobs.value.positions" />
  </main>
</template>
<script setup>
const route = useRoute();
const jobs = ref([]);
const deptFeed = ref();
const dept = ref();

jobs.value = await getJobs(null, route.params.id);
deptFeed.value = await getDepartment(route.params.id).then((result) => {
  console.log(result);
  dept.value = result.value.departments[0].department;
});
</script>