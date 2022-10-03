'use strict';

function plus(a, b) {
    let result = a + b;
    return result;
}
// 1. если не 2 интеджера
function testTwoInt() {
   if (plus(10, 1) !== 11) {
    console.log('Test not passed.');
   }
}
// 2. если строка и инт или инт и строка
function testStrInt() {
    if (typeof(plus('str' + 1) || plus(1 + 'str')) !== 'number') {
        console.log('Test not passed.');
    }
}
// 3. если первый аргумент null, а второй инт
function testNullInt() {
    plus(null, 1);
    if (a == null) {
        console.log('Test not passed. null');
    }
}
// 4. если первый аргумент инт, а второй null
function testIntNull() {
    plus(1, null);
    if (b == null) {
        console.log('Test not passed. null');
    }
}
// 5. если оба аргумента строки
function testStrStr() {
   if (plus('str', 'str') !== 'strstr') {
    console.log('Test not passed. str + str');
   }
}
// 6. если первый  - undefined, а второй инт
function testUndefFirstArg() {
    plus(undefined, 2);
    if (a == undefined) {
        console.log('Test not passed. a == undefined');
    }
}
// 7. если второй  - undefined.
function testUndefSecondArg() {
    plus(2, undefined);
    if (b == undefined) {
        console.log('Test not passed. b == undefined');
    }
}
// 8. если оба undefined
function testUndefined() {
    plus(undefined, undefined);
    if (a == undefined && b == undefined) {
        console.log('Test not passed. Both arguments are undefined');
    } 
}
// 9. оба null
function testNull() {
    plus(null, null);
    if (a == null && b == null) {
        console.log('Test not passed. Both arguments are null');
    } 
}
// 10. без ошибок 
function testNotError() {
    plus(a, b);
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        console.log('Both arguments are a number.');
    } else if (typeof(a) === 'string' && typeof(b) === 'string') {
        console.log('Both arguments are a string.');
    } else if (typeof(a) === 'array' && typeof(b) === 'array') {
        console.log('Both arguments are a array.');
    } else {
        console.log('Cases are not included to Test');
    }
}

console.log(plus(10, 3));
console.log(plus(9, null));
console.log(plus('str', 1));