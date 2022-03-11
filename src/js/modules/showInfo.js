export default class ShowInformation {
    constructor(plusBtn, msg) {
        this.plusBtn = document.querySelectorAll(plusBtn);
        this.msg = document.querySelectorAll(msg);
    }






    bindTriggers() {
        this.plusBtn.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                // btn.closest(".module__info-show").nextElementSibling.style.display = "block";
                if (this.msg[i].style.display == "block") {
                    this.msg[i].classList.add("fadeInUp");
                    this.msg[i].classList.remove("fadeInDown");

                    this.msg[i].style.display = "none";

                } else {
                    this.msg[i].classList.remove("fadeInUp");
                    this.msg[i].classList.add("fadeInDown");
                    this.msg[i].style.cssText = `   
                margin-top: 15px;
                font-weight: 400;
                line-height: 20px;
                font-size: 14px;
                letter-spacing: -.26px;
                padding-bottom: -10`;
                    this.msg[i].style.display = "block";

                }
            });
        });
    }
    init() {
        this.bindTriggers();
        this.msg.forEach(e => {
            e.classList.add("animated");
        });
    }
}