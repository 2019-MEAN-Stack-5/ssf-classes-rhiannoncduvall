"use strict";
exports.__esModule = true;
var person = /** @class */ (function () {
    function person(firstName, lastName, age, isAlive) {
        if (isAlive === void 0) { isAlive = true; }
        this.isAlive = true;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAlive = isAlive;
    }
    return person;
}());
exports.person = person;
var humanoidA = new person("Fox", "Mulder", 35);
exports.humanoidA = humanoidA;
