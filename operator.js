'use strict';

// 1. String concatenation
console.log('mycat')
console.log('1' + 2)
console.log(`string literals: 
''''
1+2 = ${ 1 + 2}`)

console.log("jaemin's \n\tbook")

// 2. numeric operators
console.log(1 + 1) // add
console.log(1 - 1) // substract
console.log(1 / 1) // divide
console.log(1 * 1) // mutiple
console.log(5 % 2) // remainder
console.log(2 ** 3) // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; preIncrement = counter;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)

const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)

// postIncrement = counter++; counter = counter + 1;

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`)
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`)

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x=x+y;
x -= y
x *= y
x /= y

//5. Comparison operators
console.log(10 < 6) // less than
console.log(10 <= 6) // less than or equal
console.log(10 > 6) // greater than
console.log(10 >= 6) // greater than or equal

//6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`)

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`)

// often used to compress long if-statement nullableObject &&
// nullableObject.something > 간편하게 null 체크 할 때도 and 연산자 사용 if(nullableObject
// !=null){     nullableObject.something; }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('개발')
    }
    return true;
}

// !(not)

console.log(!value1);

// 7. Equality
const stringFive = '5'
const numberFive = 5

// == loose equality, with type conversion
console.log(stringFive == numberFive)
console.log(stringFive != numberFive)

// === strict equality, no type conversion
console.log(stringFive === numberFive)
console.log(stringFive !== numberFive)

// object equality by reference
const jaemin1 = {
    name: 'jaemin'
};
const jaemin2 = {
    name: 'jaemin'
};
const jaemin3 = jaemin1
console.log(jaemin1 == jaemin2)
console.log(jaemin1 === jaemin2)
console.log(jaemin1 === jaemin3)

// equality - puzzler
console.log(0 == false)
console.log(0 === false)
console.log('' == false)
console.log('' === false)
console.log(null == undefined)
console.log(null === undefined)

// 8. Conditional operators : if if, else if, else

const name = 'df'
if (name == 'jaemin') {
    console.log('Welcome, jaemin!')
} else if (name == 'coder') {
    console.log('You are amazung coder')
} else {
    console.log('unknown')
}

// 9. Ternary operator: ? condition ? value1 : value2;
console.log(
    name === 'jaemin'
        ? 'yes'
        : 'no'
)

// 10. Switch statement use for mutiple if checks use for enum-like value check
// use for multiple type checks in TS

const browser = 'IE'
switch (browser) {
    case 'IE':
        console.log('go away!')
        break;
    case 'Chrome':
        console.log('love you!')
        break
    case 'Firefox':
        console.log('love you!')
        break
    default:
        console.log('same all!')
        break
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.

let i = 3;
while(i>0){
    console.log(`while: ${i}`)
    i--;
}

// do while loop, body code is executed first,
// then check the condition

do{
    console.log(`do while: ${i}`)
    i--;
}while(i>0)

// for loop, for(begin; condition; step)

for( i = 3; i>0; i--){
    console.log(`for: ${i}`)
}

for(let i = 3; i>0; i=i-2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`)
}

// nested loops
for(let i = 0; i<10; i++){
    for(let j = 0; j<10; j++){
        console.log(`i:${i}, j:${j}`)
    }
}