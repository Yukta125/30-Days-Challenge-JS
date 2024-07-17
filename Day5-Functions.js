//ACTIVITY 1
var num = 2;
function evenOdd(num) {
    if(num%2===0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}
evenOdd(num);

function square(num) {
    return num*num;
}
console.log("Square of 2 is: ", square(num));


//ACTIVITY 2
var num1=8, num2=9;
var largest = function findLargest(num1, num2) {
    if(num1>num2) {
       return num1;
    } else {
        return num2;
    }
};
console.log(largest(num1,num2));

var str1 = "Yukta", str2="Pandey";
var str = function strConcat(str1, str2) {
    return str1+str2;
};
console.log(str(str1,str2));


//ACTIVITY 3
var number1 = 10, number2 = 20;
var sum = (number1,number2) => number1+number2;
console.log(sum(number1,number2));

var str = "Yukta";
var strContains = (str) => str.includes("u");
console.log(strContains(str));


//ACTIVITY 4
function multiply(num,num2 = 10) {
    return num*num2;
}
console.log("2*10 is: ", multiply(num));

var name = "Yukta"
function greeting(name,age = 10) {
    return `Hi ${name}. You are ${age} years old`;
}
console.log("Greeting message is is: ", greeting(name));


//ACTIVITY 5
var fun = function() {
    return "Hi";
}

var HOF = function(num, fun) {
    while(num>0) {
        num--;
        console.log(fun());
    }
}
HOF(2, fun);


var print = function(name) {
    return `Hi ${name}`;
}

var print1 = function(name) {
    return `${name}. How are you?`;
}

var HOFs = function(name, print, print1) {
    var result = print(name);
    return print1(result);
    
}
console.log(HOFs("Yukta", print, print1));