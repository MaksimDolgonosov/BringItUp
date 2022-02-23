import Slider from "./modules/slider";
import VideoPlayer from "./modules/playVideo";

window.addEventListener("DOMContentLoaded", () => {
    const slider = new Slider(".page", ".next");
    slider.render();
    const player1 = new VideoPlayer(".showup .play", ".overlay");
    player1.init();
});