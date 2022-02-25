import MainSlider from "./modules/slider/sliderMain";
import VideoPlayer from "./modules/playVideo";
import MiniSlider from "./modules/slider/slider-mini";
window.addEventListener("DOMContentLoaded", () => {
    const slider = new MainSlider({ btns: ".next", page: ".page" });
    slider.render();
    const sliderMini = new MiniSlider({ page: ".showup__content-slider", next: ".showup__next", prev: ".showup__prev" });
    sliderMini.render();

    const player1 = new VideoPlayer(".showup .play", ".overlay");
    player1.init();
});