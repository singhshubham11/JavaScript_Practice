const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0);


const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);
// console.log(myTotal);

const shoppingCart = [
    {
      itemName: "Laptop", price: 1000
    },
    {
      itemName: "Smartphone", price: 700
    },
    {
      itemName: "Headphones", price: 150
    },
    {
      itemName: "Keyboard", price: 50
    }
];
  
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);
  