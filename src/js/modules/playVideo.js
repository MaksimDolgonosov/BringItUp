export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector(".close");
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
        //console.log(this.btns);
    }

    bindTriggers() {
        this.btns.forEach((btn, i) => {

            try {
                const blockedItem = btn.closest(".module__video-item").nextElementSibling;
                if (i % 2 == 0) {
                    blockedItem.setAttribute("data-blocked", 'true');
                }
            } catch (e) { }

            btn.addEventListener("click", () => {

                if (!btn.closest(".module__video-item") || btn.closest(".module__video-item").getAttribute("data-blocked") !== 'true') {
                    this.activeBtn = btn;
                    if (document.querySelector("iframe#frame")) {
                        this.overlay.style.display = "flex";
                        if (this.path !== btn.getAttribute("data-url")) {
                            this.path = btn.getAttribute("data-url");
                            this.player.loadVideoById({ videoId: this.path });
                        }
                    } else {

                        this.path = btn.getAttribute("data-url");
                        this.createPlayer(this.path);
                    } if (document.querySelector("iframe#frame")) {
                        this.overlay.style.display = "flex";
                        if (this.path !== btn.getAttribute("data-url")) {
                            this.path = btn.getAttribute("data-url");
                            this.player.loadVideoById({ videoId: this.path });
                        }
                    } else {

                        this.path = btn.getAttribute("data-url");
                        this.createPlayer(this.path);
                    }
                }

            });
        });
    }

    bindCloseBtn() {
        this.close.addEventListener("click", () => {
            this.overlay.style.display = "none";
            this.player.stopVideo();
        });
    }


    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            events: {
                'onStateChange': this.onPlayerStateChange
            }
        });
        this.overlay.style.display = "flex";
        //console.log(this.player);
    }

    onPlayerStateChange(state) {
        try {
            const blockedItem = this.activeBtn.closest(".module__video-item").nextElementSibling;
            const playBtn = this.activeBtn.querySelector("svg").cloneNode(true);
            if (state.data == 0) {
                if (blockedItem.querySelector(".play__circle").classList.contains("closed")) {
                    blockedItem.querySelector(".play__circle").classList.remove("closed");
                    blockedItem.querySelector("svg").remove();
                    blockedItem.querySelector(".play__circle").append(playBtn);
                    blockedItem.querySelector(".play__text").textContent = "play video";
                    blockedItem.querySelector(".play__text").classList.remove("attention");
                    blockedItem.style.opacity = 1;
                    blockedItem.style.filter = "none";
                    blockedItem.setAttribute("data-blocked", "false");
                }

            }
        } catch (e) { }
    }

    init() {
        if (this.btns.length > 0) {
            const tag = document.createElement('script');
            tag.src = "http://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // создание и подключение ассинхронного скрипта в начало страницы
            this.bindTriggers();
            this.bindCloseBtn();
        }

    }
}