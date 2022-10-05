'use strict';
class Error {
    constructor(message) {
        this.message = message;
    }
}

function plus(a, b) {
    if ((typeof(a) !== 'string' && typeof(b) !== 'string') ||
        (typeof(a) !== 'number' && typeof(b) !== 'number') || 
        (typeof(a) !== Array.isArray([]) && typeof(b) !== Array.isArray([]))) {
        throw new Error('Arguments are not valid.')
    } 
        let result = a + b;
        return result;
}
//тест для кейсов со строкой
function testStr() {
    try {
       (plus('str', 2) ||
        plus('str', []) ||
        plus('str', {}) ||
        plus(2, 'str') ||
        plus([], 'str') ||
        plus({}, 'str'))
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testStr());
//тест для кейсов с объектами
function testObj() {
    try {
        (plus({}, 2) ||
        plus({}, []) ||
        plus({}, {}) ||
        plus(2, {}) ||
        plus([], {}) ||
        plus({}, {}))
    }
    catch(error) {
        console.log(error.message);
    }
}
//тест для кейсов с массивами
function testArr() {
    try {
        (plus([], 2) ||
        plus([], {}) ||
        plus(2, []) ||
        plus({}, []))
    }
    catch(error) {
        console.log(error.message);
    }
}
//тест для кейсов с пустой строкой
function testEmpty() {
    try {
       (plus('', 'str') || 
        plus('', {}) || 
        plus('', []) || 
        plus('', 10) || 
        plus('str', '') || 
        plus({}, '') || 
        plus([], '') || 
        plus(10, ''))
    }
    catch(error) {
        console.log(error.message);
    }
}

console.log(testStr());
console.log(testArr());
console.log(testObj());
console.log(testEmpty());
let positive = plus(10, 1);
console.log(positive);

