// for each
const coding = ["js", "ps", "ruby", "java", "cpp"];

coding.forEach( function (val) { // for each expect a callback function we know how to write 
                                 // function. and imp point is to note that call backs do not have function name.
    // console.log(val);
})

coding.forEach(element => {
    // console.log(element);
});

function printme(item) {
    // console.log(item);
}

coding.forEach(printme); // should pass funtion refrence.

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const languages = [
    {
      languageName: "JavaScript",
      languageFileName: "javascript.js"
    },
    {
      languageName: "Python",
      languageFileName: "python.py"
    },
    {
      languageName: "Java",
      languageFileName: "java.java"
    },
    {
      languageName: "C++",
      languageFileName: "cpp.cpp"
    }
];
  
// console.log(languages);

languages.forEach((item) => {
    console.log(item.languageName);
})
  