import MainSlider from "./modules/slider/sliderMain";
import VideoPlayer from "./modules/playVideo";
import MiniSlider from "./modules/slider/slider-mini";
window.addEventListener("DOMContentLoaded", () => {
    const slider = new MainSlider({ btns: ".next", page: ".page" });
    slider.render();
    const showUpSlider = new MiniSlider({ page: ".showup__content-slider", next: ".showup__next", prev: ".showup__prev" });
    showUpSlider.render();
    const modulesSlider = new MiniSlider({ page: ".modules__content-slider", next: ".modules__content-slider .slick-next", prev: ".modules__content-slider .slick-prev" });
    modulesSlider.render();
    // const feedSlider = new MiniSlider({ page: ".feed__slider", next: ".feed__slider .slick-next", prev: ".feed__slider .slick-prev" })
    // feedSlider.render();

    const player1 = new VideoPlayer(".showup .play", ".overlay");
    player1.init();
});