//ACTIVITY 1
var num=20;
if(num === 0) {
    console.log("Number is Zero");
} else if(num > 0) {
    console.log("Number is Positive");
} else {
    console.log("Number is Negative");
}

var age=16;
if(age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}


//ACTIVITY 2
var num1 = 12, num2= 90, num3=9;
var largest = num1;

if(largest < num2) {
    largest = num2;
    if(largest< num3) {
        largest = num3;
    }
}
console.log("Largest Number is: ", largest);


//ACTIVITY 3
var day = 1;
switch(day) {
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thrusday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
}

var grade = 70;
switch(true) {
    case (grade >= 90): console.log("A");
        break;
    case (grade >= 80): console.log("B");
        break;
    case (grade >= 70): console.log("C");
        break;
    case (grade >= 60): console.log("D");
        break;
    case (grade >= 50): console.log("E");
        break;
    case (grade < 50): console.log("F");
        break;
}


//ACTIVITY 4
var number = 23;
(number%2 === 0) ? console.log("Even Number") : console.log("Odd Number");


//ACTIVITY 5
var year = 1996;
if((year%4 === 0 && year%100 !=0) || (year%400 === 0)) {
    console.log("It is leap year");
} else {
    console.log("It is not leap year");
}