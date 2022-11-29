<template>
  <div class="row">
    <div class="col">
      <div class="container-xl">
        <div class="row">
          <div class="col">
            <nav
              class="navbar navbar-expand-md navbar-white px-0"
              aria-label="Site Navigation"
            >
              <button
                class="navbar-toggler border-0 px-0 py-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNav"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" ref="navbar"></span>
                <span class="text-uppercase d-inline-block ms-2 menu-icon"
                  >Menu</span
                >
              </button>
              <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav">
                  <li class="nav-item current nav-item">
                    <NuxtLink class="nav-link" href="/"
                      ><font-awesome-icon
                        icon="fa-solid fa-magnifying-glass"
                        class="me-2"
                      />
                      Find a Job</NuxtLink
                    >
                  </li>

                  <li class="nav-item link nav-item">
                    <NuxtLink class="nav-link" href="/working-on-campus"
                      >Working on Campus
                    </NuxtLink>
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
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
