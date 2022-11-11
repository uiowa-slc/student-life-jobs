<template>
  <header class="header border-bottom">
    <!-- <a class="skip-link small" href="">Skip to main content</a> -->
    <div class="container-fluid">
      <div class="row border-bottom site-title-container">
        <div class="col">
          <div class="container-xl">
            <div class="row">
              <div class="col">
                <a
                  class="site-title"
                  href=""
                  aria-label="Campus Activities Board"
                >
                  Student Life Jobs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="container-xl">
            <div class="row">
              <div class="col">
                <nav
                  class="navbar navbar-expand-lg navbar-white px-0"
                  aria-label="Site Navigation"
                >
                  <button
                    class="navbar-toggler border-0 p-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNav"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                    <span class="text-uppercase d-inline-block ms-2 menu-icon"
                      >Menu</span
                    >
                  </button>
                  <div class="collapse navbar-collapse" id="mainNav">
                    <ul class="navbar-nav">
                      <li class="nav-item current nav-item">
                        <NuxtLink class="nav-link" href="/"
                          >Find a Job</NuxtLink
                        >
                      </li>

                      <li class="nav-item link nav-item">
                        <NuxtLink class="nav-link" href="/working-on-campus"
                          >Working on Campus</NuxtLink
                        >
                      </li>

                      <li class="nav-item link nav-item">
                        <NuxtLink class="nav-link" href="/departments"
                          >Departments</NuxtLink
                        >
                      </li>

                      <li class="nav-item link nav-item">
                        <NuxtLink class="nav-link" href="/contact"
                          >Contact Us</NuxtLink
                        >
                      </li>
                    </ul>
                    <Search />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.logo {
  max-width: 100%;
  display: block;
}
</style>