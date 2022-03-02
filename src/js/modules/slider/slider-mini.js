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

    bindTriggers() {
        this.next.addEventListener("click", () => {
            if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
                this.page.append(this.slides[0]);
                this.page.append(this.slides[0]);
                this.decorizeSlides();
            } else if (this.slides[1].tagName == "BUTTON"){
                this.page.append(this.slides[0]);
                this.decorizeSlides();
            } else {
                this.page.append(this.slides[0]);
                this.decorizeSlides();
            }
           
        });


        this.prev.addEventListener("click", () => {
            this.page.prepend(this.slides[this.slides.length - 1]);
            this.decorizeSlides();
        });
    }


    render() {

        this.page.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;`;

        this.bindTriggers();
        this.decorizeSlides();

    }
}