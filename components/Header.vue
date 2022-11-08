<template>
  <header>
    <!-- <h1>Student Life Jobs</h1> -->
    <img src="~/assets/images/logo.gif" alt="JobNet" />
    <nav>
      <ul>
        <li><NuxtLink href="/">Home</NuxtLink></li>
        <li><NuxtLink href="/jobs">Find a Job</NuxtLink></li>
        <li>
          <NuxtLink href="/working-on-campus">Working on Campus</NuxtLink>
        </li>
        <li><NuxtLink href="/departments">Departments</NuxtLink></li>
        <li><NuxtLink href="/contact">Contact Us</NuxtLink></li>
      </ul>
    </nav>
    <form>
      <input type="search" id="search" placeholder="Search for a job" />
      <button for="search">Search</button>
    </form>
  </header>
</template>