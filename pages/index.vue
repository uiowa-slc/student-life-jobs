<template>
  <main>
    <h1>Find a Job</h1>
    <h2>All currently open jobs:</h2>
    <JobList :jobs="jobs.value.positions" class="column-list" />
    <h2 class="mt-4">Jobs by category:</h2>
    <ul v-if="categories.value" class="column-list">
      <li v-for="category in categories.value.categories" :key="category.category.id"
        :class="{ active_postings: category.category.active_job_postings > 0 }">
        <NuxtLink :href="'/jobs/category/' + category.category.id">{{ category.category.name }} ({{
            category.category.active_job_postings
        }})</NuxtLink>
      </li>
    </ul>
    <h2 class="mt-4">Jobs by location:</h2>
    <ul class="column-list" v-if="locations.value">
      <li v-for="location in locations.value.locations" :key="location.location.id"
        :class="{ active_postings: location.location.active_job_postings > 0 }">
        <NuxtLink :href="'/jobs/location/' + location.location.id">{{ location.location.name }} ({{
            location.location.active_job_postings
        }})</NuxtLink>
      </li>
    </ul>
    <h2 class="mt-4">Jobs by department:</h2>
    <ul class="column-list" v-if="departments.value">
      <li v-for="department in departments.value.departments" :key="department.department.id"
        :class="{ active_postings: department.department.active_job_postings > 0 }">
        <NuxtLink :href="'/jobs/department/' + department.department.id">{{ department.department.name }} ({{
            department.department.active_job_postings
        }})</NuxtLink>
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

definePageMeta({ layout: "big", });
</script>

<style>

</style>