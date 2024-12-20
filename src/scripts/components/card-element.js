class CardElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="restaurant-item" key="${this.getAttribute(
          "id"
        )}" tabindex="0">
        <img 
          src="${this.getAttribute("image")}" 
          alt="${this.getAttribute("name")}" 
          class="restaurant-image lazyload" 
        />
        <div class="restaurant-content">
          <h3>${this.getAttribute("name")}</h3>
          <p>${this.getAttribute("city")} - ${this.generateStarRating(
      this.getAttribute("rating")
    )}</p>
          <p>${this.getAttribute("description")}</p>
          <a href="${this.getAttribute(
            "href"
          )}" class="detail-link">View Details</a>
        </div>
      </div>
    `;
  }

  generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    const stars = Array.from({ length: totalStars }, (_, index) => {
      if (index < fullStars) return '<i class="fas fa-star"></i>';
      if (index === fullStars && halfStar)
        return '<i class="fas fa-star-half-alt"></i>';
      return '<i class="far fa-star"></i>';
    }).join("");

    return `<span class="rating-tooltip" aria-label="${rating} stars">${stars}</span>`;
  }
}

customElements.define("card-element", CardElement);
