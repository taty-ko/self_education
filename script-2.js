'use strict';
let arr = [1, 2, 3, 4, 5];
arr[10] = '234'
console.log(arr[10]);
console.log(arr);


let obj = {
    Anna: 500,
    Alice: 100
}

let arrToObj = {
    age: 10,
    year: 2022,
    month: 3,
    days: {
        holiday: 'Saturday',
        workingday: 'Monday'
    }
}


console.log(arrToObj.days.workingday);

const name = 'name';
arrToObj[name] = 'Anna';

console.log(arrToObj);


let store = "Shop";
let storeDescription = {
    budget: 10000,
    employees: ['Mark', 'Sandra', 'Melisa'],
    products: {
        shoes: 100,
        dress: 150
    },
    open: true
}
console.log(storeDescription);