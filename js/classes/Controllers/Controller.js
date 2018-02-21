"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller = /** @class */ (function () {
    function Controller() {
        this.observers = [];
    }
    Controller.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Controller.prototype.removeObserver = function (observer) {
        console.warn('Здесь удаляем наблюдателя, не реализовал тк не было надобновсти');
    };
    Controller.prototype.notifyObservers = function (event) {
        this.observers.forEach(function (observer) {
            observer.handleEvent(event);
        });
    };
    return Controller;
}());
exports.default = Controller;
