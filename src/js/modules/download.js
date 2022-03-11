export default class Download {
    constructor(downloadBtn) {
        this.downloadBtn = document.querySelectorAll(downloadBtn);
        this.link = "assets/img/mainbg.jpg";
    }

    downloadPic(link) {
        const element = document.createElement("a");
        element.setAttribute("href", link);
        element.setAttribute("download", "picture");
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();

    }


    init() {
        this.downloadBtn.forEach(btn => {
            btn.addEventListener("click", (e) => {                
                e.stopPropagation();
                this.downloadPic(this.link);
            });
        });
    }
}