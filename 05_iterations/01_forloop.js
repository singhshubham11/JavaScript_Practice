// for

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
} 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element === 5) {
       // console.log("5 is best number");
    }
    // console.log(element);
} 

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);
    }
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
       // console.log(i + " * " + j + " = " + i * j);
    }
} 


let myArray = ["karan", "raj", "lalith", "heman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//Break and Continue

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        // console.log("Detected 5");
        break;
    }
    // console.log(`Value of i is ${i}`);
}

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5"); 
        // when continue is written it will return from there and go to forloop for next iteration it will not reach console.log(i)
        continue;
    }
    console.log(`Value of i is ${i}`);
}
