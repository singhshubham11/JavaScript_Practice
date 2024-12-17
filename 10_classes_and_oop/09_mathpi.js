// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai)); // undefined (bcoz chai is a object and it has properties)
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true, 
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // {
                                                            //     value: 'ginger chai',
                                                            //     writable: true,
                                                            //     enumerable: true,
                                                            //     configurable: true
                                                            //   }

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

// if (enumerable: true) then we can get name while iteration
// name : ginger chai
// price : 250
// isAvailable : true

// if (enumerable: false) then we cannot get name while iteration
// price : 250
// isAvailable : true

/**
 * 1. writable
 * 
    Meaning:
    Determines if the value of the property can be changed.

    Values:
    true: The property's value can be changed.
    false: The property's value cannot be changed (read-only).

----------------------------------------------------------------------------------------------------------------
    2. enumerable

    Meaning:
    Determines if the property appears during enumeration (like in for...in loops or Object.keys()).

    Values:
    true: The property shows up during enumeration.
    false: The property is hidden from enumeration(hidden from loops).

----------------------------------------------------------------------------------------------------------------
    3. configurable

    Meaning:
    Determines if the property can be reconfigured (i.e., deleted or modified via Object.defineProperty()).

    Values:
    true: The property can be deleted or modified (attributes like writable and enumerable can also be changed).
    false: The property cannot be deleted or reconfigured.

    ----------------------------------------------------------------------------------------------------------------
    const user = {};

    Object.defineProperty(user, 'id', {
        value: 12345,
        writable: false,      // Read-only
        enumerable: false,    // Hidden from enumeration
        configurable: false,  // Cannot be deleted or reconfigured
    });

    console.log(user.id); // Output: 12345

    user.id = 67890; // Attempt to change (fails silently)
    console.log(user.id); // Output: 12345

    console.log(Object.keys(user)); // Output: [] (id is hidden)

    delete user.id; // Attempt to delete (fails)
    console.log(user.id); // Output: 12345

 */