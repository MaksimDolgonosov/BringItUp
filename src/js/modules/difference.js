export default class Difference {
    constructor(oldOfficer, newOficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOficer);
        this.items = items;
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    bindTriggers(container, items, counter) {
        container.querySelector(".plus__content").addEventListener("click", () => {
            container.querySelectorAll(items)[counter].classList.add("animated", "fadeInDown");
            container.querySelectorAll(items)[counter].style.display = "flex";
            counter++;
            if (counter == container.querySelectorAll(items).length - 1) {
                container.querySelectorAll(items)[counter].classList.add("animated", "fadeOut");
                container.querySelectorAll(items)[counter].remove();
            }
        });
    }

    hideItems() {
        for (let i = 0; i < this.oldOfficer.querySelectorAll(this.items).length - 1; i++) {
            this.oldOfficer.querySelectorAll(this.items)[i].style.display = "none";
        }
        for (let i = 0; i < this.newOfficer.querySelectorAll(this.items).length - 1; i++) {
            this.newOfficer.querySelectorAll(this.items)[i].style.display = "none";
        }
    }

    render() {
        this.hideItems();
        this.bindTriggers(this.oldOfficer, this.items, this.oldCounter);
        this.bindTriggers(this.newOfficer, this.items, this.newCounter);
    }
}