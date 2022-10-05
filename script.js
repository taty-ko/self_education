'use strict';
class Error {
    constructor(message) {
        this.message = message;
    }
}

function plus(a, b) {
    if ((typeof(a) !== 'string' && typeof(b) !== 'string') &&
        (typeof(a) !== 'number' && typeof(b) !== 'number') && 
        (Array.isArray(a) == false && Array.isArray(b) == false)) {
        throw new Error('Arguments are not valid.')
    } 
        let result = a + b;
        return result;
}
let positive = plus(10, 1);
console.log(positive);
console.log(plus('aaaa', 8));

//тест для кейсов со строкой
function testStrNum() {
    try {
       plus('str', 2);
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testStrNum());

function testStrArr() {
    try {
       plus('str', [])
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testStrArr());

function testStrObj() {
    try {
        plus('str', {})
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testStrObj());

function testNumStr() {
    try {
        plus(2, 'str')
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testNumStr());

function testArrStr() {
    try {
        plus([], 'str')
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testArrStr());

function testObjStr() {
    try {
        plus({}, 'str')
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testObjStr());

//тест для кейсов с объектами
function testObjNum() {
    try {
        plus({}, 2)
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testObjNum());

function testObjArr() {
    try {
        plus({}, [])
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testObjArr());

function testObjObj() {
    try {
        plus({}, {})
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testObjObj());

function testNumObj() {
    try {
        plus(2, {})
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testNumObj());

function testArrObj() {
    try {
        plus([], {})
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testArrObj());

//тест для кейсов с массивами
function testArrNum() {
    try {
        plus([], 2)
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testArrNum());

function testNumArr() {
    try {
        plus(2, [])
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testNumArr());

//тест для кейсов с пустой строкой
function testEmptyStr() {
    try {
       plus('', 'str')
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testEmptyStr());

function testEmptyObj() {
    try {
        plus('', {})
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testEmptyObj());

function testEmptyArr() {
    try {
        plus('', [])
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testEmptyArr());

function testEmptyNum() {
    try {
        plus('', 10)
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testEmptyNum());

function testStrEmpty() {
    try {
        plus('str', '')
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testStrEmpty());

function testObjEmpty() {
    try {
        plus({}, '')
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testObjEmpty());

function testArrEmpty() {
    try {
        plus([], '')
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testArrEmpty());

function testNumEmpty() {
    try {
        plus(10, '')
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log(testNumEmpty());

//тест для кейсов с числом и числом
function testNumNum() {
    try {
        let res = plus(10, 10);
        if (res !== 20) {
            throw new Error ('invalid.')
        }
    }
    catch(error) {
        console.log(error.message)
    }
}
console.log(testNumNum());

