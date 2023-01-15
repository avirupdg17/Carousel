const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const slidesArray = [...slides.children];
    //console.log(slidesArray.length);
    const currentslide = slides.querySelector("[data-active]");
    const currentIndex = slidesArray.indexOf(currentslide);
    //console.log(currentslide);
    let newIndex;
    if (button.dataset.caraouselButton === "prev") {
      newIndex = (slidesArray.length + currentIndex - 1) % slidesArray.length;
    } else {
      //console.log(slidesArray.length);
      newIndex = (slidesArray.length + currentIndex + 1) % slidesArray.length;
    }
    slidesArray[newIndex].dataset.active = true;
    delete currentslide.dataset.active;
  });
});
