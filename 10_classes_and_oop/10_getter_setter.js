// new type to access values
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}karan`
    }

    set password(value){
        this._password = value
    }
}

const karan = new User("ss@karan.ai", "abc")
console.log(karan.email); // ss@karan.AI
console.log(karan.password); // abckaran

/**
 * Explanation:
    When you assign this.value = value inside a setter or constructor, the setter method is triggered.
    If the setter itself uses this.value = value again, it will keep calling itself recursively, resulting in a "Maximum call stack exceeded" error.
    To avoid this issue:

    Use a private property (commonly prefixed with an underscore, like this._value) to store the value internally.
    The setter (set value()) will write to this private property.
 */


    class User1 {
        #email; // Private field
    
        constructor(email) {
            this.#email = email; // #email is private
        }
    
        get email() {
            return this.#email.toUpperCase();
        }
    }
    
    const user = new User1("test@example.com");
    console.log(user.email);   // "TEST@EXAMPLE.COM"
    // console.log(user.#email);  // Syntax Error: Private field '#email' must be declared
    

// The underscore _ is a naming convention to indicate that the property is meant to be private/internal.
// To make it truly private, you can use the # syntax.