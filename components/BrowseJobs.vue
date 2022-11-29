<template>
  <div class="container-xl content">
    <div class="row">
      <div class="col-lg-12 m-auto">
        <main>
          <div class="py-4">
            <h1 class="text-center">Find a job on campus:</h1>
            <div :class="{ 'search-container-home': route.path == '/' }">
              <Search :term="''" />
            </div>
          </div>
          <section class="bg-gray p-4">
            <h2 class="mt-0">
              All currently open jobs in the Division of Student Life:
            </h2>
            <JobList
              v-if="jobs.value"
              :jobs="jobs.value.positions"
              class="column-list mt-4"
            />
            <p v-else>No jobs currently found.</p>
          </section>
          <section class="p-4">
            <h2 class="mt-0">Jobs by category:</h2>
            <ul v-if="categories.value" class="column-list mt-4">
              <li
                v-for="category in categories.value.categories"
                :key="category.category.id"
                :class="{
                  active_postings: category.category.active_job_postings > 0,
                }"
              >
                <NuxtLink :href="'/jobs/category/' + category.category.id"
                  >{{ category.category.name }} ({{
                    category.category.active_job_postings
                  }})</NuxtLink
                >
              </li>
            </ul>
          </section>
          <section class="bg-gray p-4">
            <h2 class="mt-0">Jobs by location:</h2>
            <ul class="column-list mt-4 list-unstyled" v-if="locations.value">
              <li
                v-for="location in locations.value.locations"
                :key="location.location.id"
                :class="{
                  active_postings: location.location.active_job_postings > 0,
                }"
              >
                <font-awesome-icon
                  icon="fa-solid fa-location-dot"
                  v-if="location.location.active_job_postings > 0"
                />
                <font-awesome-icon
                  icon="fa-solid fa-location-dot"
                  style="opacity: 0.2"
                  v-else
                />
                &nbsp;
                <NuxtLink :href="'/jobs/location/' + location.location.id"
                  >{{ location.location.name }} ({{
                    location.location.active_job_postings
                  }})</NuxtLink
                >
              </li>
            </ul>
          </section>
          <section class="p-4">
            <h2 class="mt-0">Jobs by department:</h2>
            <ul class="column-list mt-4" v-if="departments.value">
              <li
                v-for="department in departments.value.departments"
                :key="department.department.id"
                :class="{
                  active_postings:
                    department.department.active_job_postings > 0,
                }"
              >
                <NuxtLink :href="'/jobs/department/' + department.department.id"
                  >{{ department.department.name }} ({{
                    department.department.active_job_postings
                  }})</NuxtLink
                >
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();
const jobs = ref([]);
const locations = ref([]);
const categories = ref([]);

const departments = ref([]);

jobs.value = await getJobs();
locations.value = await getLocations();
categories.value = await getCategories();
departments.value = await getDepartments();
</script>