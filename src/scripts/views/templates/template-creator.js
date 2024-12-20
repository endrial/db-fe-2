import CONFIG from "../../globals/config";

const createRestaurantItemTemplate = (restaurant) => `
    <card-element
      id="${restaurant.id}"
      name="${restaurant.name}"
      city="${restaurant.city}"
      image="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
      loading="lazy"
      rating="${restaurant.rating}"
      href="${`#/detail/${restaurant.id}`}"
      description="${restaurant.description}"
    ></card-element>
`;

const createDetailRestaurantTemplate = (restaurant) => `
  <h2 class="restaurant-name">${restaurant.name}</h2>
  <figure>
    <img src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" 
    alt="${restaurant.name}" class="restaurant-image">
    <div class="restaurant-info">
      <p><strong>Address:</strong> ${restaurant.address}</p>
      <p><strong>City:</strong> ${restaurant.city}</p>
      <p><strong>Description:</strong> ${restaurant.description}</pass=>
    </div>
  </figure>


  <div class="restaurant-menu">
    <figure>
      <h3>Food Menu</h3>
      <ul class="food-menu">
        ${restaurant.menus.foods
          .map((food) => `<li>${food.name}</li>`)
          .join("")}
      </ul>

      <h3>Drink Menu</h3>
      <ul class="drink-menu">
        ${restaurant.menus.drinks
          .map((drink) => `<li>${drink.name}</li>`)
          .join("")}
      </ul>
    </figure>
  </div>

  <div class="customer-reviews">
    <figure>
      <h3>Customer Reviews</h3>
      <ul class="reviews-list">
        ${restaurant.customerReviews
          .map(
            (review) => `
              <li><strong>${review.name}</strong>: ${review.review}</li>
              <span class="date-review">${review.date}</span>
          `
          )
          .join("")}
      </ul>
    </figure>
  </div>
`;

const createLikeButtonTemplate = () => `
    <a aria-label="like this restaurant" id="likeButton" class="favorite">
      Add to Favorite
    </a>
`;

const createLikedButtonTemplate = () => `
    <a aria-label="unlike this restaurant" id="likeButton" class="favorite">
      Remove from Favorite
    </a>
`;

export {
  createRestaurantItemTemplate,
  createDetailRestaurantTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
