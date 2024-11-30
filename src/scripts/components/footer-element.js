class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
          <p>Copyright © 2024 - Madu Resto Group</p>
        </footer>
    `;
  }
}

customElements.define('footer-element', FooterElement);
