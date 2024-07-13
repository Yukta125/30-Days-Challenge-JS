//ACTIVITY 1
var num = 12;
console.log(num);

let name = "Yukta";
console.log(name);

//ACTIVITY 2
const bool = false;
console.log(bool);

//ACTIVITY 3
var number = 10;
console.log(typeof(number));

var str = "String";
console.log(typeof(str));

var b = true;
console.log(typeof(b));

var obj = {id:1001, name:"Yukta"};
console.log(typeof(obj));

var arr = ["Orange", "Litchi", "Mango", "Banana"];
console.log(typeof(arr));

//ACTIVITY 4
let id = 101;
console.log("let var Initial value: ", id);
id = 1001;
console.log("let var Reassigned value: ", id);

//ACTIVITY 5
const ans = 90;
console.log("const var Initial value: ", ans);
// ans = 91; //will give error since we cannot reassign a value to const
console.log("const var Reassigned value: ", ans);

//ACTIVITY 6
var number = "Number";
console.log("Redeclaring var with same name: ", number);
// let id = "Yukta"; //will give error since it is not allowed.
console.log("Redeclaring let with same name: ", id);
// const ans = 90; //will give error since it is not allowed.
console.log("Redeclaring const with same name ", ans);