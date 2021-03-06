//Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
//object ={key, value}


//1. Litterals and properties
const obj1={} // 'object literal'
 const obj2 = new Object() // 'object constructor'
function print(person){
    console.log(person.name)
    console.log(person.age)

}


const ellie = {name : 'ellie', age: 4}
print(ellie)


// with JavaScript magic(dynamically typed language)
// can add properties later
ellie.hasjob = true;
console.log(ellie.hasjob)

// can delete properties later
delete ellie.hasjob;
console.log(ellie.hasjob)

// 2. Computed properties
// key should be always string
console.log(ellie.name)
console.log(ellie['name']) // 런타임에서 결정 될 때 사용
ellie['hasJob'] = true;
console.log(ellie.hasJob)

function printValue(obj, key){
    // console.log(obj.key ) // 오브젝트에 key라는 프로퍼티가 들어있니? -> 아니 없잖아 그럼 아래와 같이 컴퓨티드 프로퍼티를 써

    console.log(obj[key])
}
printValue(ellie, 'name')
printValue(ellie, 'age')

// 3. Property value shorthand

const person1 = { name: 'bob', age:2}
const person2 = { name: 'steve', age:3}
const person3 = { name: 'dave', age:4}

const person4 = new Person('jaemin', 30)

console.log(person4)

// 4. Constructor function
function Person(name, age){
    // this = {}
    this.name = name
    this.age = age
    // return this;
}

// 5. in operator: property existence check (key in obj)

console.log('name' in ellie)
console.log('age' in ellie)
console.log('random' in ellie)
console.log( ellie.random)

//6. for..in vs for..of
//for (key in obj)

console.clear()
for(key in ellie){
    console.log(key)
}

// for (value of iterable)

const array = [1,2,4,5]
for(value of array){
    console.log(value)
}

// 7. Fun cloning
// Object.assign (dest, [obj1, obj2, obj3...])

const user = { name : 'ellie', age: '20'}
const user2 = user

console.log(user)

//old way
const user3 ={}
for(key in user){
    user3[key] = user[key]
}
console.clear()
console.log(user3)

const user4 = {}
Object.assign(user4, user)
console.log(user4)

// another example

const fruit1 = { color: 'red'}
const fruit2 = { color: 'blue', size: 'big'}
const mixed = Object.assign({}, fruit1, fruit2)
console.log(mixed.color)
console.log(mixed.size)