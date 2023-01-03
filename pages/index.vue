<template>
  <div>
    <Head>
      <Title></Title>
      <Meta
        name="title"
        content="Student Life Jobs | The University of Iowa"
      />
      <Meta
        name="description"
        content="Find a part-time job on campus! Working on campus
              helps students connect with students, faculty, and staff that might be
              outside of their field of study."
      />
    </Head>
    <Header />
    <img
      id="find"
      src="~/assets/images/rec.jpg"
      alt="The Recreational Services building at sunset"
      class="header-image"
      width="1652"
      height="1101"
    />
    <BrowseJobs />
  </div>
</template>
<script setup>
import { ref } from "vue";
</script>

<style>
</style>