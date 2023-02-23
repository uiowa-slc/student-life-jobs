import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons/faMapPin";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faMapPin,
  faMagnifyingGlass,
  faUser,
  faLocationDot,
  faArrowUpRightFromSquare
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
