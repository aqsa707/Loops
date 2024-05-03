// // // Ex. Hello World x 25

// // // console.log("Hello, World");

// // // Create a loop thats runs 25 times.
// // // 1. control variable
// // // var i = 0; // Controls when the loop breaks

// // // while (i < 25) {
// // //   // console.log(i);
// // //   console.log("hello, World");
// // //   i++; // increase i by 1. Known as the "incrementor"
// // // }

// // // All loops need 3 things
// // // 1. Control Variable. Eg var i = o
// // // 2. Loop Condition. Eg i < 25. should always start true and eventually become false. DO THIS CHECK
// // // 3. Increment the control variable, otherwise INFINE LOOP!

// // // Write a while loop that prints the phrase "Hello, world!" 0 - 99 times
// // // let i = 0;
// // // while (i <= 99) {
// // //   console.log(i);
// // //   i++;
// // // }

// // // Ex. 99 - 0
// // // let i = 99;
// // // while (i >= 0) {
// // //   console.log(i);
// // //   i--;
// // // }

// // // Prompt the user to enter the strig "stop", if they don't type "stop" keep looping through the prompt
// // // user to type in something specific. Eg. type in user email using the symbol @

// // // let userWord = ""; // control variable
// // // // != not equal
// // // while (userWord != "STOP") {
// // //   userWord = prompt("Type stop to break the loop");
// // // }
// // // alert("Thanks for typing stop");

// // // Print all ODD numbers from 50 to 100
// // // let j = 50;
// // // while (j <= 100) {
// // //   if (j % 2 == 1) {
// // //     console.log(j);
// // //   }
// // //   j++;
// // // }

// // // let m = 51;
// // // while (m <= 100) {
// // //   console.log(m);
// // //   m+-2;
// // // }
// // // //true for any odd number
// // // 3 % 2 = 1
// // // 11 % 2 = 1

// // // 10. Write a loop that logs the numbers 0 - 4 to the console.
// // let a = 0;
// // while (a <= 4) {
// //   console.log(a);
// //   a++;
// // }
// // // 11.Write a loop that logs the number 5 - 15 to the console
// // let b = 5;
// // while (b <= 15) {
// //   console.log(b);
// //   b++;
// // }

// // // 12. Write a loop that logs the even numbers from 0 - 10 to the console
// // let c = 2;
// // while (c <= 10) {
// //   console.log(c);
// //   c = c + 2;
// // }

// // 13.Write a loop that logs the off numbers from 5 to 15 to the console
// // let d = 5;
// // while (d <= 15) {
// //   console.log(d);
// //   d = d + 2;
// // }

// // 14. write a loop that logs the numbers from 10 down to 0 to the console
// // let e = 10;
// // while (e >= 0) {
// //   console.log(e);
// //   e--;
// // }

// // 15. Write a loop that logs the numbers from 10 down to 0, skipping over the number 5, to the console
// // let f = 10;
// // while (f >= 0) {
// //   if (f == 5) {
// //     f--;
// //   }
// //   console.log(f);
// //   f--;
// // }

// // 16. Write a loop that logs the numbers from 1 - 100 to the console. For numbers divisible by 3, log "Hizz" instead of the number. For numbers divisible by 5, log "Buzz" instead of the number. For numbers divisble by both 3 and 5, log "FizzBuzz instead of the number."
// let g = 1;
// while (g <= 100) {

// }

// Monday. April 29
// let m = 51;
// while (m <= 100){
//     console.log(m);
//     m += 2 // same as m = m + 2
// }
// difference between do while and while loops
// idk

// Ex. print -10 to +10
// let i = -10;
// do {
//   console.log(i);
//   i++; // same as i = i + 1
// } while (i <= 10);

// Ex. Type STOP
// let userWord;
// do {
//   userWord = prompt("Type STOP");
// } while (userWord != "STOP");

// Fix the Infinite Loop
// var num = -1;
// while (num < 0) {
//     console.log(num)
//     num += 3;
// }

// Ex. prompter. user selects number 4 and 10.
// Users number must fall between 4 and 10
// let min = +prompt("Enter MIN value");
// let max = +prompt("Enter MAX value");
// let userNum;

// do {
//   userNum = +prompt(`Enter a value between ${min} and ${max}`);
// } while (userNum < min || userNum > max);
// alert("Thank you!");

// Ex. Break Statement
// let num;
// while (true) {
//   num = +prompt("Enter a value between 1 and 10");
//   if (num >= 1 && num <= 10) {
//     break;
//   }
// }
// alert("Thanks!");

// Ex. 25 - 1, skip 18 and 7
// let counter = 25;
// while (counter >= 1) {
//   counter--;
//   if (counter == 18 || counter == 7) {
//     continue; // skips the rest{bottom statements} of the statements
//   }
//   console.log(counter);

// Ex. Average Calculator
// let numOfValues = 0;
// let sum = 0;
// let userNum;

// while (true) {
//   userNum = +prompt("Enter a value (0 to quit):");
//   if (userNum == 0) {
//     break;
//   }
//   // If code gets here, user has entered a good value
//   sum = sum + userNum;
//   console.log(sum);

//   numOfValues++; //Tracks how many values user types
// }

// let average = sum / numOfValues;
// average = average.toFixed(1);
// alert(`The average is: ${average}`);

// Practice
// 1.
// let i = 0;
// while (i < 800) {
//   // console.log(i);
//   console.log("HELLO");
//   i++; // increase i by 1. Known as the "incrementor"
// }
// // 2.
// let a = 0
// while (a < 5)

// Exercise 8
// Users number must fall between 4 and 10
// let a = +prompt("Enter MIN value");
// let b = +prompt("Enter MAX value");
// let userNum;

// do {
//   userNum = +prompt(`Enter a value between ${min} and ${max}`);
// } while (userNum < min || userNum > max);
// alert("Thank you!");

// let a = +prompt("Enter a value between 1 and 20");
// let userNum;
// while (userNum >= 1 || userNum <= 20) {
//   if ((userNum = 11)) {
//     alert("Yay you guess correctly!");
//   } else {
//     alert("Try again.");
//   }
// }

// Ex. Hello World x 25

// Create a loop that runs 25 times.
// var i = 0; // control variable - controls when loop breaks

// while (i < 25) {
//   //   console.log(i);
//   console.log("hello, world!");
//   i++; // increase i by 1. Known as "incrementor"
// }

// All loops need 3 things:
// 1. Control variable.  e.g. var i = 0
// 2. Loop condition. E.g. i < 25.  Should ALWAYS start true, eventually become false. DO THIS CHECK.
// 3. Increment the control variable, otherwise INFINITE LOOP!

// Ex. 0 to 99
// let i = 0;
// while (i < 99) {
//   console.log(i);
//   i++;
// }

// Ex. 99 to 0
// let i = 99;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// Ex.  User Types STOP
// let userWord = ""; // control variable

// while (userWord != "STOP") {
//   userWord = prompt("Type STOP to break the loop");
// }

// alert("Thanks for typing stop");

// Print all ODD numbers from 50 to 100 using a loop

// let j = 50;
// while (j <= 100) {
//   if (j % 2 == 1) {
//     console.log(j);
//   }

//   j++;
// }

// let m = 51;
// while (m <= 100) {
//   console.log(m);
//   m += 2; // same as m = m + 2
// }

// Ex Print -10 to +10

// let i = -10;
// do {
//   console.log(i);
//   i++; // same as i = i + 1
// } while (i <= 10);

// Ex Type STOP

// let userWord;
// do {
//   userWord = prompt("Type STOP");
// } while (userWord != "STOP");

// Fix the infinite loop
// var num = -1;
// while (num < 0) {
//   num += 3;
// }

// Ex.  Prompter. User selects numbers 4 and 10.
// User's 3rd number must fall between 4 and 10.

// let min = +prompt("Enter MIN value");
// let max = +prompt("Enter MAX value");
// let userNum;

// do {
//   userNum = +prompt(`Enter a value between ${min} and ${max}`);
// } while (userNum < min || userNum > max);
// alert("Thank you!");

// Ex.  Break statement
// let num;
// while (true) {
//   num = +prompt("Enter a value between 1 and 10");
//   if (num >= 1 && num <= 10) {
//     break;
//   }
// }
// alert("Thanks!");

// Ex 25 to 1, skip 18 and 7
// let counter = 25;
// while (counter >= 1) {
//   counter--;
//   if (counter == 18 || counter == 7) {
//     continue; // skips the rest of the statements
//   }

//   console.log(counter);
// }

// Ex. Average Calculator
// let numOfValues = 0;
// let sum = 0;
// let userNum;

// while (true) {
//   userNum = +prompt("Enter a value (0 to quit):");

//   if (userNum == 0) {
//     break;
//   }

//   // If code gets here, user has entered a good value
//   sum = sum + userNum;
//   numOfValues++; // tracks how many values user types
// }

// let average = sum / numOfValues;
// average = average.toFixed(1);

// alert(`The average is ${average}`);

// Ex 1
// var x = 0;
// while (x < 800) {
//   console.log("HELLO");
//   x++;
// }

// Ex 2
// var y = 20;
// while (y <= 500) {
//   console.log(y);
//   y += 5;
// }

// Ex 3
// var z = 100;
// while (true) {
//   console.log(z);
//   z -= 2; // same as z = z - 2
//   if (z == 8) {
//     break;
//   }
// }

// Ex 4
// let x = 18;
// let total = 0;

// while (x <= 150) {
//   console.log(`Total: ${total}`);
//   console.log(`x: ${x}`);
//   total += x;
//   x++;
// }

// While 1 to 10
// var i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Ex. BLASTOFF
// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("BLASTOFF!");

// Ex. Factorial  5!
// let start = +prompt("Factorial: "); // need a loop to do: 5*4*3*2*1, then stop
// let result = 1;

// for (let i = start; i >= 1; i--) {
//   // console.log(`i: ${i}`);
//   result = result * i;
//   // console.log(`result: ${result}`);
// }
// console.log(`${start}! = ${result}`);

// Ex. Odd Sum:  E.g. 10:  1 + 3 + 5 + 7 + 9 = 25
// let num = +prompt("Enter number to add odds up to:");
// let total = 0;

// for (let i = 1; i <= num; i += 2) {
//   total += i;
// }

// console.log(total);

// May 3rd 2024
// Loop practice

// 1. write a for loop that prints the word "McDavid" 1000 times
// let a = 1;
// while (a <= 1000) {
//   console.log(a);
//   console.log("McDavid");
//   a++;
// }

// for-loop
// for (let j = 1; j <= 1000; j++) {
//   console.log("McDavid");
// }

// 2. write a for loop that prints the numbers 200 down to - 50
// let b = 200;
// while (b < 200 && b > -50) {
//   console.log(b);
// }

// for (let m = 200; m >= -50; m--) {
//   console.log(m);
// }

// 3. write a program to ask the user for a number.
// then write a for loop that prints that many random single digit random number

// let userNumber = +prompt("Enter a number");

// for (let g = 0; g < userNumber; g++) {
//   let random = Math.random() * 10;
//   random = Math.floor("random");
//   console.log(random);
// }

// Exercises from ex.1
// 1. Write a for loop that will log to the console, "HELLO", 800 times
// for (let a = 1; a <= 800; a++) {
//   console.log(a);
//   console.log("HELLO");
// }

// Exercise from ex.1
// 2. Write code that will log to the console all of the
// multiples of 5 from 20 to 500

// Exercises from ex.1
// 3. Write code that will log to the
// console all of the even numbers from 100 to 10

// Print all ODD numbers from 50 to 100
// let j = 50;
//  while (j <= 100) {
//    if (j % 2 == 1) {
//      console.log(j);
//    }
//    j++;
//  }

let c = 100;
while (c >= 10) {
  if (c % 2 == 1) {
    console.log(c);
  }
  c++;
}
