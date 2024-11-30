import RestaurantDbSource from "../../data/restaurantdb-source";
import UrlParser from "../../routes/url-parser";
import { createDetailRestaurantTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import ImgDetailInitiator from "../../utils/img-detail-initiator";

const Detail = {
  async render() {
    return `
      <section id="detail" class="restaurant-details"></section> 
      <loader-element></loader-element>
      <div id="likeButtonContainer" class="favorite-button"></div> 
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector("#detail");
    const loaderElement = document.querySelector("loader-element");
    const inputName = document.querySelector("#name");
    const inputReview = document.querySelector("#review");
    const formReview = document.querySelector("#form-review");

    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    loaderElement.classList.add("hidden");

    restaurantContainer.innerHTML = createDetailRestaurantTemplate(
      restaurant.restaurant
    );

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating,
      },
    });

    ImgDetailInitiator.init(document.querySelector("section#detail figure"));
  },
};

export default Detail;
