export default class Form {
    constructor(form) {
        this.forms = document.querySelectorAll(form);

    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    }


    bindPostData(form) {
        form.querySelector(".btn").addEventListener("click", e => {
            e.preventDefault();
            const formData = new FormData(form);
            this.postData("assets/question.php", formData)
                .then(data =>
                    console.log(data))
                .catch()

        });
    }

    render() {
        this.forms.forEach(e => {
            this.bindPostData(e);
        });
    }
}