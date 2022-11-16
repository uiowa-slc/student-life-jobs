<template>
  <div>
    <Head>
      <Title>{{ category.name }}</Title>
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
                Category: {{ category.name }}
              </li>
            </ol>
          </nav>

          <main id="main">
            <h1>{{ category.name }}</h1>
            <p>
              The following open jobs are categorized as "<strong>{{
                category.name
              }}</strong
              >":
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
const categoryFeed = ref();
const category = ref();

jobs.value = await getJobs(route.params.id);
categoryFeed.value = await getCategory(route.params.id).then((result) => {
  //console.log(result);
  category.value = result.value.categories[0].category;
});

if (!category.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}
</script>