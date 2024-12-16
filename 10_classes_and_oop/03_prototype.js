// JavaScript's prototype-based behavior allows objects to inherit properties and methods
// from other objects through the prototype chain. If an object doesn't have a method, 
// JavaScript will look up the prototype chain (parent, grand parent..etc) to find it and throw an error if it can't 
// find the method anywhere. This approach makes JavaScript flexible, memory-efficient, and dynamic.

let myName = "karan     "
let mychannel = "rex     "

// console.log(myName.length); // 10
// console.log(myName.trim().length); // 5
// console.log(myName.trueLength); // undefined bcoz there is no such function called trueLength


// let myHeros = ["thor", "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.karan = function(){
//     console.log(`karan is present in all objects`);
// }

// heroPower.karan() // karan is present in all objects
// myHeros.karan() //karan is present in all objects


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.karan = function(){
    console.log(`karan is present in all objects`);
}

Array.prototype.heykaran = function(){
    console.log(`karan says hello`);
}
// heroPower.karan() // karan is present in all objects
// myHeros.karan() //karan is present in all objects
// myHeros.heykaran() // karan says hello
// heroPower.heykaran() // error

// Notes:-
// 1) The prototype is defined at the Object level, so methods added to Object.prototype can be accessed by all
//    objects, including arrays, strings, and other types.
// 2) However, the prototype is also defined at the Array level, and methods added to Array.prototype 
//    are specific to arrays and cannot be accessed by general objects.



// inheritance

const User = {
    name: "rex",
    email: "rex@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // assigning refrence (this is called prototype inheritance)
}

Teacher.__proto__ = User // OLD syntax

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


// craeting new method called as trueLength

let anotherUsername = "rexDog     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"karan".trueLength()
"iceTea".trueLength()