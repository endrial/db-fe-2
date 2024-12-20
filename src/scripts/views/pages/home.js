import RestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
      <section class="hero" id="hero-section">
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="./images/heros/hero-image_4-small.jpg"
          <img
            src="./images/heros/hero-image_4.jpg"
            alt="Hero Image"
            width="100%"
            loading="lazy"
          />
        </picture>
      </section>
      <section class="container" id="restoran">
      <h1 class="title-page">Restau-Run List</h1>
        <loader-element></loader-element>
        <div class="restaurants-container"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector(
      ".restaurants-container"
    );
    const loaderElement = document.querySelector("loader-element");

    const { restaurants } = await RestaurantDbSource.getRestaurants();
    loaderElement.classList.add("hidden");

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
