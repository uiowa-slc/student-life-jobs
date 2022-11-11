<template>
  <div>
    <form class="d-flex search mb-2 mb-lg-0" @submit.prevent="handleSearch(term)">
      <input type="search" id="search" v-model="term" placeholder="Search for a job"
        class="form-control border-0 search-input" />
      <button class="btn" type="submit">
        <font-awesome-icon :icon="['fas', 'search']" class="search-icon" />
        <span class="sr-only">Search</span>
      </button>
    </form>
  </div>
</template>
<script setup>
const search = ref([]);
const router = useRouter();

function handleSearch(term) {
  if (term) {
    router.push("/search/" + term);
  }
}
</script>
<style lang="scss" scoped>
.search {
  border-bottom: 3px solid #ccc;

  &:focus {
    border-color: gold;
  }
}

.search-input {}

.search-icon {
  color: black;
}
</style>