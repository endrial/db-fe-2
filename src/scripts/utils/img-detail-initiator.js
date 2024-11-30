const ImgDetailInitiator = {
  init(figureDetail) {
    const imgDetail = figureDetail.querySelector('img');

    figureDetail.addEventListener('click', () => {
      imgDetail.classList.toggle('object-contain');
      imgDetail.classList.toggle('restaurant-image');
    });
  },
};

export default ImgDetailInitiator;
