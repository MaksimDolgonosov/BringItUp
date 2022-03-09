export default class Slider {
    constructor({ page = null,
        btns = null,
        next = null,
        prev = null,
        nextModule = null,
        prevModule = null,
        activeClass = "",
        animate,
        autoplay } = {}) {
        this.page = document.querySelector(page);
        try { this.slides = this.page.children; } catch (e) { };
        this.btns = document.querySelectorAll(btns);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.nextModule = document.querySelectorAll(nextModule);
        this.prevModule = document.querySelectorAll(prevModule);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
        //this.visitCard = document.querySelector(".hanson");

    }


}