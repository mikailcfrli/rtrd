// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 3));

// let a= 10;
// for (a ; a >= 5; a--) {
//     console.log(a);
// }
// function registration() {
//   const lastname = prompt("Please write your last name:");
//   const firstname = prompt("Please write your first name:");
//   const email = prompt("Please write your email address:");
//   return `${email} - ${lastname} ${firstname}`;
// } 
// console.log(registration());

// function calculation() {
//     const distance = +prompt("Please write distance in km:");
//     const fixedprice = 5
//     return (distance * 0.25) + fixedprice;
//   }
// console.log(calculation());

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
