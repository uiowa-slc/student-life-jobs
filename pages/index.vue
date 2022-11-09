<template>
  <main>
    <h2>All currently open jobs:</h2>
    <ul v-if="jobs.value">
      <li v-for="job in jobs.value.positions" :key="job.position.id">
        <NuxtLink :href="'/jobs/show/' + job.position.id">{{
          job.position.posting_title
        }}</NuxtLink>
      </li>
    </ul>
    <h2>Jobs by category:</h2>
    <ul v-if="categories.value">
      <li
        v-for="category in categories.value.categories"
        :key="category.category.id"
      >
        <NuxtLink :href="'/jobs/category/' + category.category.id"
          >{{ category.category.name }} ({{
            category.category.active_job_postings
          }})</NuxtLink
        >
      </li>
    </ul>
    <h2>Jobs by location:</h2>
    <ul v-if="locations.value">
      <li
        v-for="location in locations.value.locations"
        :key="location.location.id"
      >
        <NuxtLink :href="'/jobs/location/' + location.location.id"
          >{{ location.location.name }} ({{
            location.location.active_job_postings
          }})</NuxtLink
        >
      </li>
    </ul>
    <h2>Jobs by department:</h2>
    <ul v-if="departments.value">
      <li
        v-for="department in departments.value.departments"
        :key="department.department.id"
      >
        <NuxtLink :href="'/jobs/department/' + department.department.id"
          >{{ department.department.name }} ({{
            department.department.active_job_postings
          }})</NuxtLink
        >
      </li>
    </ul>
  </main>
</template>
<script setup>
import { ref } from "vue";

const jobs = ref([]);
const locations = ref([]);
const categories = ref([]);

const departments = ref([]);
// const jobsFeed = ref(await getJobs());
jobs.value = await getJobs();
locations.value = await getLocations();
categories.value = await getCategories();
departments.value = await getDepartments();
// console.log(jobsFeed.value);
// jobsFeed = await getJobs().then((result) => {
//   //   events.value = result.value.events;
//   //console.log(events.value);
// });
</script>