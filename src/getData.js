import { LitElement } from "lit-element";

export class GetData extends LitElement {
  firstUpdated() {
    this.getData();
  }

  sendData(data) {
    let event = new CustomEvent("send-data", {
      detail: { data },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  getData() {
    fetch("https://rickandmortyapi.com/api/character", { method: "GET" })
      .then((res) => res.json())
      .then((data) => this.sendData(data))
      .catch((err) => console.log("this is an error", err));
  }
}

customElements.define("get-data", GetData);
