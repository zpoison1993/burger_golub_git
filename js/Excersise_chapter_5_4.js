"use strict";

var obj={
    name: 'Vladimir',
    lastName: 'Golub',
    age: 25
}

console.log(obj.name);
console.log(obj.lastName);
console.log(obj.age);

obj['dogName'] = 'Toshi';
console.log(obj.dogName);

function hello(object) {
    return 'Привет, меня зовут ' + object.name +' '+ object.lastName + ' и мне ' + object.age + ' лет!'; 
}

var writing = hello(obj);
console.log(writing);
alert(writing);