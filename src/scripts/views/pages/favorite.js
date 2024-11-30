import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section id="favorite-resto" class="container pt-2 pb-4">
        <h1 class="title-page mt-4">Restau-Run Favorite</h1>
        
        <div class="restaurants-container"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    const favoriteContainer = document.querySelector('.restaurants-container');
    restaurants.forEach((restaurant) => {
      favoriteContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
