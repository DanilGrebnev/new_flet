import { makeAutoObservable } from "mobx";

class Slider {
    constructor() {
        makeAutoObservable(this)
    }

    //Процент смещения
    translateX = 0

    //Количество слайдеров
    amount = 0

    //Счётчик перелистнутых слайдов
    count = 0

    //Устанавливает количество слайдов
    getCounertSlides = n => this.amount = n

    //Получение размера карты
    getCardSize = el => {
        console.clear()
        console.log("offsetWIdth: " + el.current.offsetWidth)
        console.log(el.current)
    }

    //Подсчитывает процент, на который должно произойти смещение
    step = _ => 100 / this.amount

    next = _ => {
        this.count++
        if (this.count === this.amount) {
            this.count = 0
            return this.translateX = 0
        }

        this.translateX -= this.step()
    }

    prev = _ => {
        this.count--
        if (this.count === -1) {
            this.count = (this.amount - 1)
            return this.translateX = -66
        }

        this.translateX += this.step()
    }
}

export default new Slider()