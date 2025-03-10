export class Counter extends HTMLElement {
  shadowRoot = undefined;
  count = 0;
  css = /*css*/ `
    :host {
      display: flex;
      gap: 1em;
    }

    button {
      width: 2em;
      height: 2em;
      border-radius: 100vh;
      border: none;
      display: grid;
      place-items: center;
      background-color: blue;
      color: #fff;
      font-weight: bold;
    }
  `;

  html = /*html*/ `
    <style>
      ${this.css}
    </style>
    <button class="counter-minus">-</button>
    <span>${this.count}</span>
    <button class="counter-plus">+</button>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.html;

    this.shadowRoot.querySelector(".counter-plus").addEventListener("click", () => {
      this.count++;
      this.shadowRoot.querySelector("span").textContent = this.count;
    });

    this.shadowRoot.querySelector(".counter-minus").addEventListener("click", () => {
      this.count--;
      this.shadowRoot.querySelector("span").textContent = this.count;
    });

    console.log("cc fire");
  }
}
