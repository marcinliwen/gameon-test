  const productGallery = document.getElementById("product-gallery");
  if (productGallery) {
    lightGallery(productGallery, {
      speed: 1000,
      download: false,
      plugins: [lgVideo],
    });
  }

