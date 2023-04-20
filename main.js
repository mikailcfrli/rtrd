// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 3));

// let a= 10;
// for (a ; a >= 5; a--) {
//     console.log(a);
// }

// task 1 

//   const lastname = prompt("Please write your last name:");
//   const firstname = prompt("Please write your first name:");
//   const email = prompt("Please write your email address:");

// function registration() {
//   return `${email} - ${lastname} ${firstname}`;
// } 
// console.log(registration());

// task 2

//     const distance = +prompt("Please write distance in km:");

// function calculation() {
//     const fixedprice = 5
//     return (distance * 0.25) + fixedprice;
//   }
// console.log(calculation());

// task 3

// function lastamount(name, price, quantity, participatesInPromotion) {
//     let amount = price * quantity;
//     if (quantity >= 5) {
//       amount = 0.9*amount;
//     }
//     if (participatesInPromotion) {
//       amount *= 0.85;
//     }
//     return amount;
//   }
//   console.log(lastamount("Shorts", 5, 12, false))

// task 4

// function suggestion(guestNumber) {
//     let table;
//     if (guestNumber <= 2) {
//       table = "Small";
//     } else if (guestNumber <= 4) {
//       table = "Medium";
//     } else if (guestNumber <= 8) {
//       table = "Large";
//     } else {
//       return "The restaurant will not be able to accommodate a company of more than 8 people within one table :-(";
//     }
//     return `We recommend a ${table} table for you`;
//   }
//   console.log(suggestion(3))

// task 5 

// let temp1 = +prompt("Enter temperature");
// let temp2 = +prompt("Enter temperature");
// let temp3 = +prompt("Enter temperature");

// function temperatureOrder() {

//     let highest, middle, lowest;

//     if (temp1 >= temp2 && temp1 >= temp3) {
//       highest = temp1;
//       if (temp2 >= temp3) {
//         middle = temp2;
//         lowest = temp3;
//       } else {
//         middle = temp3;
//         lowest = temp2;
//       }
//     } else if (temp2 >= temp1 && temp2 >= temp3) {
//       highest = temp2;
//       if (temp1 >= temp3) {
//         middle = temp1;
//         lowest = temp3;
//       } else {
//         middle = temp3;
//         lowest = temp1;
//       }
//     } else {
//       highest = temp3;
//       if (temp1 >= temp2) {
//         middle = temp1;
//         lowest = temp2;
//       } else {
//         middle = temp2;
//         lowest = temp1;
//       }
//     }
  
//     console.log(highest, middle, lowest);
//   }
//   temperatureOrder();

// TASK 6

// const userInformation = {
//   name: prompt("Please enter your name"),
//   age: +prompt("What is your age?"),
//   orderNum: +prompt("How many items have you ordered?"),
//   orderAmount: 20,
// }
// function findOutDiscount() {
//   if (userInformation.age > 60 || (userInformation.orderNum > 4 && (userInformation.orderNum  * userInformation.orderAmount >= 100))) {
//     return alert("Possible discount");
//   }
//   else {
//     return alert("No discount");
//   }
// }
// findOutDiscount();

// TASK 7

// const userInformation = {
//   length: +prompt("Please enter length of item in cm"),
//   width: +prompt("Please enter width of item in cm"),
//   height: +prompt("Please enter height of item in cm"),
//   weight: +prompt("Please enter weight of item in kg"),
//   range: +prompt("Delivery distance"),
// }
// function findOutSize() {
//   const sum = userInformation.length + userInformation.width + userInformation.height
//   if (sum<=150 && (userInformation.length<=100 && userInformation.width<=100 && userInformation.height<=100) && userInformation.weight<=10 && userInformation.range>3 && userInformation.range<10) {
//     return alert("it is small");
//   }
//   else {
//     return alert("noo way!!");
//   }
// }
// findOutSize();

// TASK 11

// const orderNum = +(prompt("Enter the order number:"));

// function calculateLoyalty() {

//     if (orderNum < 1) {
//         return alert("You ain't even loyal. Go away!");
//     }
//     else if (orderNum <= 2) {
//         return alert("Your loyalty point: 1");
//     }
//     else {
//       let previous1 = 1;
//       let previous2 = 1;
//       let current = 0;
//       for (let i = 3; i <= orderNum; i++) {
//         current = previous1 + previous2;
//         previous2 = previous1;
//         previous1 = current;
//       }
//       return alert("Your loyalty point: " + current);
//     }
//   }
//   calculateLoyalty();

// TASK 9 

// const number = +(prompt("Enter a number: "));

// function checkingNumbers() {

//     if (isNaN(number) || number < 1) {
//         return console.log("Error");
//     }
  
//     for (let i = 1; i <= 1000; i++) {
//       if (i % number === 0) {
//         console.log(i);
//       }
//     }
//   }
// checkingNumbers();

// TASK 10

// const initialAmount = +prompt("Enter initial amount:");
// const durationYears = +prompt("Enter duration in years:");
// const interestRate = +prompt("Enter % per year:") / 100;

// function calculateBankDeposit() {
//     let totalAmount = initialAmount;
//     for (let i = 0; i < durationYears; i++) {
//       totalAmount += totalAmount * interestRate;
//     }
//     return alert(totalAmount - initialAmount);
//   }
//   calculateBankDeposit();