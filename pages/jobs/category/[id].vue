<template>
  <main>
    <Head>
      <Title>{{ category.name }}</Title>
    </Head>

    <h1>Jobs categorized as "{{ category.name }}":</h1>
    <JobList :jobs="jobs.value.positions" />
  </main>
</template>
<script setup>
const route = useRoute();
const jobs = ref([]);
const categoryFeed = ref();
const category = ref();

jobs.value = await getJobs(route.params.id);
categoryFeed.value = await getCategory(route.params.id).then((result) => {
  //console.log(result);
  category.value = result.value.categories[0].category;
});
</script>