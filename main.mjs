import "./src/register.mjs";
import { routes } from "./src/route.mjs";

window.addEventListener("hashchange", onHashChange);
onHashChange();

async function onHashChange() {
  const hash = window.location.hash;
  console.log(hash);
  const page = routes[hash];
  if (!page) {
    return;
  }

  const appRoot = document.querySelector("app-root");
  const appShadow = appRoot.shadowRoot || appRoot.attachShadow({ mode: "open" });
  appShadow.innerHTML = /*html*/ `
    <style>
      :host {
        width: 100%;
        height: 100%;
      }
    </style>
    ${page}
  `;
}
