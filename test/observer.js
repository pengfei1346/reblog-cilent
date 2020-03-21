//
class ObserverList {
    constructor() {
        this.observerList = []
    }
    add(obj) {
        return this.observerList.push(obj)
    }
    get(index) {
        if (index > -1 && index < this.observerList.length) {
            return this.observerList[index]
        }
    }
    count() {
        return this.observerList.length
    }
    remove(index) {
        this.observerList.splice(index, 1)
    }
    indexOf(obj) {
        return this.observerList.indexOf(obj)
    }
}

//
class Subject {
    constructor() {
        this.observers = new ObserverList()
    }
    addObserver(observer) {
        this.observers.add(observer)
    }
    removeObserver(observer) {
        let index = this.observers.indexOf(observer)
        if (index >= 0) {
            this.observers.remove(index)
        }
    }
    notify(context) {
        const observerCount = this.observers.count()
        for (let i = 0; i < observerCount; i++) {
            this.observers.get(i).update(context)
        }
    }
}

//
class Observer {
    update() {
        // ...
    }
}
