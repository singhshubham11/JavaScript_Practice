class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

//Static Methods: A static method in a class is a method that belongs to the class itself, not to instances of the class.

// Static Methods: Belong to the class itself, not to individual instances.

// Call on the Class: Use the class name to call static methods.

// Instance Methods: Belong to individual objects created from the class.

// By calling createId on the class (User.createId()), you can use it for any class that extends User as well.