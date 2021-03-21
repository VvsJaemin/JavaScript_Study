// Function
//  - fundamental building block in the program
//  - subprogram can be used multiple times(여러번 재 사용)
//  - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing (하나의 함수는 한가지 일만 하게 만든다)
// naming: doSomething, command, verb(함수명은 무언가 하는 동사형태로 지어야 한다.)
// e.g createCardAndPoint -> createCard. createPoint
// function is object in JS

function printHello(){
    console.log('Hello')
}
printHello();

function log(message){
    console.log(message)
}
log('Hello@')
log('1234')

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name='coder'
}
const jaemin = {name : 'jaemin'}
changeName(jaemin)
console.log(jaemin)

// 3. Default parameters (added in ES6)
function showMessage(message, from='unknown'){
    console.log(`${message} by ${from}`)
}
showMessage("Hi!")

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i<args.length; i++){
        console.log(args[i])
    }

    for(const arg of args){
        console.log(arg)
    }

    args.forEach((arg) => console.log(arg))
}
printAll('dream', 'coding', 'jaemin')

// 5. Local scope(밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.)
let globalMessage = 'global' // global variable
function printMessage(){
    let message = 'hello'
    console.log(message); // local variable
    console.log(globalMessage)
    function printAnother(){
        console.log(message)
        let childMessage = 'hello'
    }
    // console.log(childMessage) //error
}

printMessage();

// 6. Return a value
function sum(a,b){
    return a+b
}

const result = sum(1,2) // 3
console.log(`sum: ${sum(1,2)}`)

// 7. Early return, early exit
// bad

function upgradeUser(user){
    if(user.point > 10){

    }
    // long upgrade logic...
}


// good
function upgradeUser(user){
    if(user.point <= 10){
        return;

    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to othe functions
// can be returned by another function



// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.

const print = function(){ // anonymous function(익명함수)
    console.log('print')
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3))

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer==='love you'){
        printYes()
    }else{
        printNo()
    }
}

// anonymous function(익명함수)
const printYes = function(){
    console.log('Yes!')
}


// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('No!')
}

randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)

// Arrow function
// always anonymous
const simpleprint =()=> console.log('simplePrint!')
const add = (a,b) => a+b
const simpleMultiply = (a,b)=>{
    // do something more
    return a*b
}

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE')
})();
