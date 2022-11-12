"use strict";
exports.__esModule = true;
exports.input2 = exports.input1 = exports.arrayOfNumber = void 0;
exports.arrayOfNumber = (function () {
    var blank = [];
    blank.length = 10000;
    return blank.fill(0).map(function () { return Math.floor(Math.random() * 10000); });
})();
exports.input1 = [
    {
        name: "John",
        age: 60
    },
    {
        name: "Doe",
        age: 20
    },
    {
        name: "Will",
        age: 40
    },
    {
        name: "Smith",
        age: 69
    },
    {
        name: "Mayer",
        age: 56
    },
];
exports.input2 = [
    {
        name: "John",
        age: 60,
        salary: 50000,
        children: 3
    },
    {
        name: "Doe",
        age: 20,
        salary: 30000,
        children: 2
    },
    {
        name: "Will",
        age: 40,
        salary: 20000,
        children: 1
    },
    {
        name: "Smith",
        age: 69,
        salary: 25000,
        children: 0
    },
    {
        name: "Mayer",
        age: 56,
        salary: 60000,
        children: 1
    },
];
