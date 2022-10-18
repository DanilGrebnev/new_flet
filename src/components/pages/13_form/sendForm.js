import { makeAutoObservable } from "mobx"

class SendForm {
    constructor() {
        makeAutoObservable(this)
    }

    ok = false
    error = false
    loading = false
    disabled = false

    mail = ''
    name = ''
    phone = ''

    setName = e => {
        this.name = e.target.value
    }

    setPhone = e => {
        this.phone = e.target.value
    }

    setMail = e => {
        this.mail = e.target.value
    }

    send = async e => {
        e.preventDefault()

        //Валидируем
        if (this.name === "" || this.phone === "" || this.mail === "") {
            return alert("Заполните все поля")
        }

        const data = JSON.stringify({
            name: this.name,
            phone: this.phone,
            mail: this.mail
        })

        //Изменит текст кнопки на "отправка"
        this.loading = true
        this.disabled = true

        const res = await fetch("https://market-api.flet.su/fb", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: data
        })

        //Если сообщение не отправлено
        if (!res.ok || res.status === 404) {
            //Изменит текст кнопки на "ошибка"
            this.loading = false
            this.error = true

            setTimeout(_ => {
                this.error = false
                this.disabled = false
            }, 3000)

            console.clear()
            console.log(res)
            return
        }

        //Изменит текст кнопки на "успешно"
        this.loading = false
        this.ok = true

        setTimeout(_ => {
            this.ok = false
            this.disabled = false
        }, 3000)

        console.clear()
        console.log(res)

        this.mail = ""
        this.name = ""
        this.phone = ""
    }
}

export default new SendForm()