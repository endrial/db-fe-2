Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite"); // Mengakses halaman favorit dengan hash routing
  I.waitForElement(".restaurants-container", 10); // Menunggu hingga elemen .restaurants-container muncul selama 10 detik
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.say("Navigating to favorites page");
  I.waitForElement(".restaurants-container", 10); // Menunggu hingga elemen .restaurants-container muncul selama 10 detik
  I.see("Tidak ada resto difavoritkan", ".restaurants-container");
});

Scenario("liking one restaurant", ({ I }) => {
  I.say("Navigating to favorites page");
  I.waitForElement(".restaurants-container", 10); // Menunggu hingga elemen .restaurants-container muncul selama 10 detik
  I.see("Tidak ada resto difavoritkan", ".restaurants-container");

  I.amOnPage("/");
  I.say("Navigating to home page");

  I.waitForElement(".restaurant-item a", 10); // Menunggu hingga elemen .restaurant-item__title a muncul selama 10 detik
  I.seeElement(".restaurant-item a");
  I.click(locate(".restaurant-item a").first());

  I.waitForElement("#likeButton", 10); // Menunggu hingga elemen #likeButton muncul selama 10 detik
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite"); // Kembali ke halaman favorit dengan hash routing
  I.say("Navigating back to favorites page");

  I.waitForElement(".restaurant-item", 10); // Menunggu hingga elemen .restaurant-item muncul selama 10 detik
  I.seeElement(".restaurant-item");
});
