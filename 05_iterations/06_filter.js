const coding = ["js", "ps", "ruby", "java", "cpp"];

// const values = coding.forEach((item) => {
//     return item;
// })

// console.log(values); // undefined (forEach does not return a new array). It always returns undefined.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const values = myNums.filter((num) => num > 4);
const values = myNums.filter((num) => { // if you use {} scope then return keyword is must.
    return num > 4
});
// console.log(values);

const newNums = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
})
// console.log(newNums);

const books = [
    {
      title: "The Great Gatsby", genre: "Fiction", publish: "1925", edition: "1st"
    },
    {
      title: "To Kill a Mockingbird", genre: "Fiction", publish: "1960", edition: "1st"
    },
    {
      title: "1984", genre: "Dystopian", publish: "1949", edition: "1st"
    },
    {
      title: "The Catcher in the Rye", genre: "Fiction", publish: "1951", edition: "1st"
    },
    {
      title: "The Hobbit", genre: "Fantasy", publish: "1937", edition: "1st"
    },
    {
      title: "Fahrenheit 451", genre: "Dystopian", publish: "1953", edition: "1st"
    },
    {
      title: "Pride and Prejudice", genre: "Romance", publish: "1813", edition: "1st"
    },
    {
      title: "The Lord of the Rings", genre: "Fantasy", publish: "1954", edition: "1st"
    },
    {
      title: "Moby Dick", genre: "Adventure", publish: "1851", edition: "1st"
    },
    {
      title: "War and Peace", genre: "Historical Fiction", publish: "1869", edition: "1st"
    }
];
  
// const userBooks = books.filter((bk) => bk.genre === "Fiction");

const userBooks = books.filter((bk) => { 
    return bk.publish >= 1950 && bk.genre === "Fantasy";
} );
console.log(userBooks);
  