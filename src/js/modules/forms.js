export default class Form {
    constructor(form) {
        this.forms = document.querySelectorAll(form);
        this.loading = "Loading...";
        this.success = "Successfully sent";
        this.failure = "Fail!";

    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    }
    clearInputs() {
        inputs.forEach(e => {
            e.value = "";
        });

    }



    bindPostData(form) {
        form.querySelector(".btn").addEventListener("click", e => {
            e.preventDefault();
            // try {
            //     form.querySelector(".policy").innerHTML = this.loading;
            // } catch (e) { }

            if (form.querySelector(".policy")) {
                form.querySelector(".policy").innerHTML = this.loading;
            } else {
                const statusMessage = document.createElement("div");
                statusMessage.style.cssText = `font: 13px Mark`;
                statusMessage.textContent = this.loading;
                form.append(statusMessage);
            }

            const formData = new FormData(form);
            this.postData("assets/question.php", formData)
                .then(data =>
                    console.log(data)
                )
                .catch(() => {
                    if (form.querySelector(".policy")) {
                        form.querySelector(".policy").innerHTML = this.failure;
                    } else {
                        form.lastElementChild.remove();
                        const statusMessage = document.createElement("div");
                        statusMessage.style.cssText = `font: 13px Mark`;
                        statusMessage.textContent = this.failure;
                        form.append(statusMessage);
                    }
                })
                .finally(() => {

                });

        });
    }

    render() {
        this.forms.forEach(e => {
            this.bindPostData(e);
        });
    }
}