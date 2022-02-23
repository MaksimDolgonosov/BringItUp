export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }
    showSlide(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slider.length;
        }
        this.slides.forEach(slider => {
            slider.style.display = "none";
            slider.classList.add("animated");
        });
        this.slides[this.slideIndex - 1].classList.add("fadeIn");
        this.slides[this.slideIndex - 1].style.display = "block";
    }
    plusSlides(n) {
        this.showSlide(this.slideIndex += n);
    }

    render() {
        this.btns.forEach(btn => {
            btn.addEventListener("click", () => {
                this.plusSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlide(this.slideIndex);
            });

            // document.querySelector('[href="#"]').addEventListener("click", (e) => {
            //     e.preventDefault();
            //     this.slideIndex = 1;
            //     this.showSlide(this.slideIndex);
            // });

        });
        this.showSlide(this.slideIndex);

    }

}