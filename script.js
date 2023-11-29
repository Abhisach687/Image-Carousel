const carouselContainer = document.querySelector(".carousel-container");
const carouselImages = Array.from(carouselContainer.querySelectorAll("img"));
const carouselControls = carouselContainer.querySelector(".carousel-controls");
const carouselArrows = Array.from(
  carouselContainer.querySelectorAll(".carousel-arrow")
);

let currentIndex = 0;

// Set the width of the image wrapper and the images dynamically
carouselContainer.querySelector(".carousel-image-wrapper").style.width = `${
  carouselImages.length * 100
}%`;
carouselImages.forEach((img) => {
  img.style.width = `${100 / carouselImages.length}%`;
});

function updateCarousel() {
  carouselContainer.querySelector(
    ".carousel-image-wrapper"
  ).style.transform = `translateX(-${
    (currentIndex * 100) / carouselImages.length
  }%)`;
  carouselControls.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

carouselImages.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("carousel-dot");
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
  carouselControls.appendChild(dot);
});

carouselArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("left")) {
      currentIndex =
        (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    } else {
      currentIndex = (currentIndex + 1) % carouselImages.length;
    }
    updateCarousel();
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  updateCarousel();
}, 3000);

updateCarousel();
