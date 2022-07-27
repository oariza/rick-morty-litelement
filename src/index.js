import { LitElement, html, css } from "lit-element";
import "./getData";

export class Index extends LitElement {
  static get properties() {
    return {
      result: { type: Array },
    };
  }

  static get styles() {
    return css`
      .container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .card-container {
        margin: 0;
        padding: 0;
        width: 300px;
        height: 400px;
        margin: 24px;
        border-radius: 5px;
        background-color: gold;
        border: 1px solid gold;
      }

      p {
        font-family: sans-serif;
        margin: 0;
        text-align: center;
      }

      .text-name {
        font-size: 18px;
        font-weight: 600;
        margin-top: 12px;
      }

      .text-origin {
        margin-bottom: 12px;
      }

      .text-specie {
      }
    `;
  }

  constructor() {
    super();
    this.result = [];
    this.addEventListener("send-data", (datos) => {
      this.result = datos.detail.data.results;
      console.log("result", this.result);
    });
  }

  render() {
    return html`
      <get-data></get-data>
      <h1>Rick y Morty</h1>
      ${this.template}
    `;
  }

  get template() {
    return html`
      <div class="container">
        ${this.result.map(
          (item) => html`
            <div class="card-container">
              <img src=${item.image} />
              <p class="text-name">${item.name}</p>
              <p class="text-origin">${item.origin.name}</p>
              <p class="text-specie">${item.species}</p>
              
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define("my-lit", Index);
