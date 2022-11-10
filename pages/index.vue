<template>
  <head>
    <Title>Find a Job</Title>
  </head>
  <main>
    <h1>Find a Job</h1>
    <h2>All currently open jobs:</h2>
    <JobList :jobs="jobs.value" />
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

jobs.value = await getJobs();
locations.value = await getLocations();
categories.value = await getCategories();
departments.value = await getDepartments();
</script>