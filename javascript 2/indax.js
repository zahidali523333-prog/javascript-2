// /////////chapter 6 ////////

//      //// Q1 ////
// var a = 10;

// document.write("Initial value of a = " + a + "<br>");

// document.write("++a = " + (++a) + "<br>");
// document.write("Now a = " + a + "<br>");

// document.write("a++ = " + (a++) + "<br>");
// document.write("Now a = " + a + "<br>");

// document.write("--a = " + (--a) + "<br>");
// document.write("Now a = " + a + "<br>");

// document.write("a-- = " + (a--) + "<br>");
// document.write("Now a = " + a);

// //       //// Q2 ////

// var a = 2;
// var b = 1;

// var result = --a - --b + ++b + b--;

// document.write("a = " + a + "<br>");
// document.write("b = " + b + "<br>");
// document.write("Result = " + result);
// //      //// Q3 ////

// // var userName = prompt("enter your name" )
// // alert( "Name:" + userName )

// //      //// Q5 ////
// var num = prompt("Enter a number:");

// if (num == "" || num == null) {
//     num = 5;
// }

// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }

// for (var i = 1; i <= 10; i++) {

//     document.write(num + " x " + i + "." + (num * i) + "<br>");
// }


// //      //// Q6 ////

// var sub1 = prompt("Enter first subject:");
// var sub2 = prompt("Enter second subject:");
// var sub3 = prompt("Enter third subject:");

// var marks1 = +prompt("Enter first subject marks:");
// var marks2 = +prompt("Enter second subject marks:");
// var marks3 = +prompt("Enter third subject marks:");

// var total = marks1 + marks2 + marks3;
// var percentage = (total / 300) * 100;

// document.write("<h2>Marks Sheet</h2>");

// document.write(sub1 + " = " + marks1 + "<br>");
// document.write(sub2 + " = " + marks2 + "<br>");
// document.write(sub3 + " = " + marks3 + "<br>");

// document.write("Total Marks = " + total + " / 300<br>");
// document.write("Percentage = " + percentage + "%");