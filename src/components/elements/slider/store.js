import { makeAutoObservable } from "mobx";

class SLider {
    constructor() {
        makeAutoObservable(this)
    }

    

}

export default new SLider()