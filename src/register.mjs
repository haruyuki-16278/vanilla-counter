// Pages
import { HomePage } from "./pages/home.mjs";
// Components
import { Counter } from "./components/counter.mjs";

/*
 * Page Register
 */
customElements.define("home-page", HomePage);

/*
 * Component Register
 */
customElements.define("app-counter", Counter);
