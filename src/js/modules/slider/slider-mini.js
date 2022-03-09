import Slider from "./slider";
export default class MiniSlaider extends Slider {
    constructor(page, next, slides, prev, activeClass, animate, autoplay) {
        super(page, slides, next, prev, activeClass, animate, autoplay);

    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0.4';
                slide.querySelector('.card__controls-count').style.opacity = '0.4';
            }
        });
        this.slides[0].classList.add(this.activeClass);
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-count').style.opacity = '1';
        }
    }



    nextSlide() {
        if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
            this.page.append(this.slides[0]);
            this.page.append(this.slides[0]);
            this.decorizeSlides();
        }
        if (this.slides[1].tagName == "BUTTON") {
            this.page.append(this.slides[0]);
            this.decorizeSlides();
        }
        this.page.append(this.slides[0]);
        this.decorizeSlides();
    }

    bindTriggers() {
        this.next.addEventListener("click", () => this.nextSlide());

        this.prev.addEventListener("click", () => {

            if (this.slides[this.slides.length - 1].tagName == "BUTTON" && this.slides[this.slides.length - 2].tagName == "BUTTON") {
                this.page.prepend(this.slides[this.slides.length - 1]);
                this.page.prepend(this.slides[this.slides.length - 1]);
                this.decorizeSlides();
            }
            this.page.prepend(this.slides[this.slides.length - 1]);
            this.decorizeSlides();
        });
    }



    render() {
        try {
            this.page.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;`;

            this.bindTriggers();
            this.decorizeSlides();


            if (this.autoplay == true) {
                let intervalPlay = setInterval(() => this.nextSlide(), 5000);
                this.page.addEventListener("mouseenter", () => clearInterval(intervalPlay));
                this.page.addEventListener("mouseleave", () => intervalPlay = setInterval(() => this.nextSlide(), 5000));
            }
        } catch (e) { }
    }
}