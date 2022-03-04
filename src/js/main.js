import MainSlider from "./modules/slider/sliderMain";
import VideoPlayer from "./modules/playVideo";
import MiniSlider from "./modules/slider/slider-mini";
import Difference from "./modules/difference";

window.addEventListener("DOMContentLoaded", () => {
    const slider = new MainSlider({ btns: ".next", page: ".page" });
    slider.render();

    const showUpSlider = new MiniSlider({
        page: ".showup__content-slider",
        next: ".showup__next",
        prev: ".showup__prev",
        activeClass: "card-active",
        animate: true
    });
    showUpSlider.render();

    const modulesSlider = new MiniSlider({
        page: ".modules__content-slider",
        next: ".modules__info-btns .slick-next",
        prev: ".modules__info-btns .slick-prev",
        activeClass: "card-active",
        animate: true,
        autoplay: true
    });
    modulesSlider.render();

    const feedSlider = new MiniSlider({
        page: ".feed__slider",
        next: ".feed__slider .slick-next",
        prev: ".feed__slider .slick-prev",
        activeClass: "feed__item-active"
    });
    feedSlider.render();

    const player1 = new VideoPlayer(".showup .play", ".overlay");
    player1.init();

    const officer = new Difference(".officerold", ".officernew", ".officer__card-item");
    officer.render();

});