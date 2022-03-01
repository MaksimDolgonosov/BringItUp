import Slider from "./slider";
export default class MiniSlaider extends Slider {
    constructor(page, next, slides, prev, activeClass, animate, autoplay) {
        super(page, slides, next, prev, activeClass, animate, autoplay);

    }


    decorizeSlide() {
        this.slides.forEach(item => {
            item.classList.remove(this.activeClass);
            if (this.animate) {
                this.slides[0].querySelector(".card__title").style.opacity = ".4";
                this.slides[0].querySelector(".card__controls-arrow").style.opacity = ".4";
            }
        });

        this.slides[0].classList.add(this.activeClass);
        if (this.animate) {
            this.slides[0].querySelector(".card__title").style.opacity = "1";
            this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
        }

    }

    bindTriggers() {
        this.next.addEventListener("click", () => {
            this.page.append(this.slides[0]);
        });


        this.prev.addEventListener("click", () => {
            this.page.prepend(this.slides[this.slides.length - 1]);
        });
    }


    render() {

        this.page.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;`;

        this.bindTriggers();
        this.decorizeSlide();

    }
}