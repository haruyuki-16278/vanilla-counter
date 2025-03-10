export class HomePage extends HTMLElement {
  shadowRoot = undefined;

  css = /*css*/ `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1em;
    }
  `;

  html = /*html*/ `
    <style>
      ${this.css}
    </style>
    <h1>Home</h1>
    <app-counter></app-counter>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.html;
  }
}
