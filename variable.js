// 1. Use Strict added in ES 5 use this for Valina JavaScript

'use strict';

// 2. Variable, rw(read/write) > 읽고 쓰기 가능
// let (added in ES6)

let globalName = 'global name';
{
    let name = 'jaemin'
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var > 쓰지마 var hoisting > 어디에 선언했냐와 상관없이 항상 제일 위로 선언을 끌어 올려주는 것 has no block
// scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constants, r(read only) > 읽기만 가능 
// use const whenever possible.
// only use let if variable needs to change


const daysInWeek = 7;
const maxNumber = 5;
// Note!
// Immutable data types: primitive types, frozen objects (i.e object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutalble data type always for a few reasons:
// - security (보안)
// - thread safety
// - reduce human mistakes

// 4. Variable types 
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container 
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, Nan

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

// string
const char = 'c'
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`)
const helloBob = `hi${brendan}!`; // template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`)

// boolean false:  0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`)
console.log(`value: ${test}, type: ${typeof test}`)

//null > 너는 텅텅 비어 있는 empty 값이야 아무것도 아니야 

let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`)

// undefined > 선언은 되었지만 아무것도 값이 지정되어 있지 않은 상태 

let x;
console.log(`value: ${x}, type: ${typeof x}`)

// symbol, create unique identifiers for objects(고유식별자)

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2)

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2) //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

// object, real-life object, data structure
const jaemin = { name : 'jaemin', age:32}
jaemin.age = 30;


// 5. Dynamic typing: dunamically typed language
let text = 'hello'
console.log(text.charAt(0)) //h
console.log(`value: ${text}, type: ${typeof text}`)
text = 1;
console.log(`value: ${text}, type: ${typeof text}`)
text = '7'+5
console.log(`value: ${text}, type: ${typeof text}`)
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`)
console.log(text.charAt(0))
