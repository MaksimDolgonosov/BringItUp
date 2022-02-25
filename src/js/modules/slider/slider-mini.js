import Slider from "./slider";
export default class MiniSlaider extends Slider {
    constructor(page, next, prev) {
        super(page, next, prev);
    }

    showSlide(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }


        this.slides.forEach(slider => {
            slider.style.display = "none";
            slider.classList.add("animated");
        });
        // this.slides[this.slideIndex - 1].classList.add("fadeIn");
        this.slides[this.slideIndex - 1].style.display = "block";
    }
    plusSlides(n) {
        this.showSlide(this.slideIndex += n);
        this.slides[this.slideIndex - 1].classList.remove("slideInLeft");
        this.slides[this.slideIndex - 1].classList.add("slideInRight");

        this.slides[this.slideIndex - 1].style.display = "block";
    }
    minusSlides(n) {
        this.showSlide(this.slideIndex -= n);
        this.slides[this.slideIndex - 1].classList.remove("slideInRight");
        this.slides[this.slideIndex - 1].classList.add("slideInLeft");
        this.slides[this.slideIndex - 1].style.display = "block";

    }

    render() {

        this.next.addEventListener("click", () => {
            this.plusSlides(1);
        });


        this.prev.addEventListener("click", () => {
            this.minusSlides(1);
        });


        this.showSlide(this.slideIndex);

    }
}