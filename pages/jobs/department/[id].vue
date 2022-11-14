<template>
  <div>
    <Head>
      <Title>{{ dept.name }}</Title>
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
                Department: {{ dept.name }}
              </li>
            </ol>
          </nav>
          <main id="main">
            <h1>{{ dept.name }}</h1>
            <p>
              The following open jobs are in the department {{ dept.name }}:
            </p>
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
const deptFeed = ref();
const dept = ref();

jobs.value = await getJobs(null, route.params.id);
deptFeed.value = await getDepartment(route.params.id).then((result) => {
  console.log(result);
  dept.value = result.value.departments[0].department;
});
</script>