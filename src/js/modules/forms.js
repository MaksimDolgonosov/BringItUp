export default class Form {
    constructor(form) {
        this.forms = document.querySelectorAll(form);
        this.loading = "Loading...";
        this.success = "Successfully sent";
        this.failure = "Fail! Please, reload the WEB page";
        this.inputs = document.querySelectorAll("input");
        this.emailInputs = document.querySelectorAll("[name=email]");
        // this.pnoneNumber = document.querySelector("[name='phone']");

    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    }
    clearInputs() {
        this.inputs.forEach(e => {
            e.value = "";
        });

    }

    initMask() {
        let setCursorPosition = (pos, elem) => {
            elem.focus();
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();
            }
        };

        function createMask(event) {

            let matrix = "+1 (___) ___-____";
            let i = 0;

            let def = matrix.replace(/\D/g, "");// вместо не чисел, пустые строки (матрица)

            let val = this.value.replace(/\D/g, "");// вместо не чисел, пустые строки (то что ввёл пользователь)


            if (def.length >= val.length) {
                val = def; // пользователь не мог удалить 7 из matrix
            }

            this.value = matrix.replace(/./g, function (a) {
                if (/[_\d]/.test(a) && i < val.length) {
                    return val.charAt(i++);
                } else if (i >= val.length) {
                    return "";
                } else {
                    return a;
                }
            });


            if (event.type == "blur") {
                if (this.value.length == 2) {
                    this.value = "";
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }

        let inputs = document.querySelectorAll("[name='phone']");
        inputs.forEach(input => {
            input.addEventListener("input", createMask);
            input.addEventListener("focus", createMask);
            input.addEventListener("blur", createMask);
        });
    }




    controlEmailInputs() {
        this.emailInputs.forEach(textInput => {
            textInput.addEventListener("input", (e) => {
                // if (e.key.match(/[^а-яё 0-9]/gi)) {
                //     e.preventDefault();
                // };
                textInput.value = textInput.value.replace(/[а-я]/gi, "");
            });

        });

    }

    bindPostData(form) {
        form.querySelector(".btn").addEventListener("click", e => {
            e.preventDefault();
            // try {
            //     form.querySelector(".policy").innerHTML = this.loading;
            // } catch (e) { }
            const statusMessage = document.createElement("div");
            statusMessage.style.cssText = `font: 13px Mark`;

            if (form.querySelector(".policy")) {
                form.querySelector(".policy").innerHTML = this.loading;
            } else {

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
                        statusMessage.textContent = this.failure;
                        form.append(statusMessage);
                    }
                })
                .finally(() => {
                    if (form.querySelector(".policy")) {
                        form.querySelector(".policy").innerHTML = this.success;
                        this.clearInputs();
                        setTimeout(() => form.querySelector(".policy").innerHTML = 'By clicking «Send» I am agreed <br> with Privacy Policy.', 2000);
                    } else {
                        form.lastElementChild.remove();
                        statusMessage.textContent = this.success;
                        form.append(statusMessage);
                        this.clearInputs();
                        setTimeout(() => form.lastElementChild.remove(), 2000);

                    }
                });

        });
    }



    render() {
        this.forms.forEach(e => {
            this.bindPostData(e);
        });
        this.controlEmailInputs();
        this.initMask();
    }
}