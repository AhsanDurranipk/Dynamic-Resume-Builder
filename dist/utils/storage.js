"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.saveData = function (data) {
        localStorage.setItem('resumeData', JSON.stringify(data));
    };
    Storage.loadData = function () {
        var data = localStorage.getItem('resumeData');
        return data ? JSON.parse(data) : {};
    };
    return Storage;
}());
exports.Storage = Storage;
