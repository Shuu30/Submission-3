import css from "bootstrap/dist/css/bootstrap.min.css";

class NavigasiBar extends HTMLElement {

    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.render();
    }


    render() {
        this.shadowRoot.innerHTML = `
        <style>
            ${css}
        </style>
        
        <!-- As a heading -->
        <nav class="navbar navbar-dark bg-dark">
          <span class="navbar-brand mb-0"><h3>Bakanime</h3></span>
        </nav>
        `;
    }
}


customElements.define("nav-bar", NavigasiBar);