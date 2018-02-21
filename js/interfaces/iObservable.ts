import iObserver from "./iObserver";

interface iObservable {
    addObserver(observer: iObserver);
    removeObserver(observer: iObserver);
    notifyObservers(event);
}

export default iObservable;