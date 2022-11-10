<template>
  <header>
    <!-- <h1>Student Life Jobs</h1> -->
    <img src="~/assets/images/logo.gif" alt="JobNet" class="logo" />
    <nav>
      <ul>
        <li><NuxtLink href="/">Find a Job</NuxtLink></li>
        <li>
          <NuxtLink href="/working-on-campus">Working on Campus</NuxtLink>
        </li>
        <li><NuxtLink href="/departments">Departments</NuxtLink></li>
        <li><NuxtLink href="/contact">Contact Us</NuxtLink></li>
      </ul>
    </nav>
    <Search />
  </header>
</template>
<style scoped>
.logo {
  max-width: 100%;
  display: block;
}
</style>