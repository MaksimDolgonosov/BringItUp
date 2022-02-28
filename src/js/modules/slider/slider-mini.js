import Slider from "./slider";
export default class MiniSlaider extends Slider {
    constructor(page, next, slides, prev) {
        super(page, slides, next, prev);
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

    }
}