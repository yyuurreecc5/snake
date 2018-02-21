import iObservable from "../../interfaces/iObservable";
import iObserver from "../../interfaces/iObserver";

class Controller implements iObservable {
    protected observers: iObserver[] = [];

    public addObserver(observer: iObserver) {
        this.observers.push(observer);
    }

    public removeObserver(observer: iObserver) {
        console.warn('Здесь удаляем наблюдателя, не реализовал тк не было надобновсти');
    }

    public notifyObservers(event) {
        this.observers.forEach((observer) => {
            observer.handleEvent(event);
        })
    }
}

export default Controller;