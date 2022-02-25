export default class Slider {
    constructor({ page = null, btns = null, next = null, prev = null } = {}) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slideIndex = 1;
        //this.visitCard = document.querySelector(".hanson");

    }


}