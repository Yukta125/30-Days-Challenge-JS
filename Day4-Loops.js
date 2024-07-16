//ACTIVITY 1
console.log("Print Number from 1 to 10");
for(var i=1; i<=10; i++) {
    console.log(i);
}

console.log("Multiplication table of 5");
for(var i=5; i<=50; i+=5){
    console.log(i);
}


//ACTIVITY 2
var num=1;
var sum=0;
while(num <= 10) {
    sum += num;
    num++;
}
console.log("Sum of numbers from 1 to 10: ",sum);

console.log("Print Number from 10 to 1");
var n=10;
while(n>=1) {
    console.log(n);
    n--;
}


//ACTIVITY 3
console.log("Print Number from 1 to 5");
var num=1;
do {
    console.log(num);
    num++;
} while(num<=5)

var fact=1;
num=1;
do {
    fact *= num;
    num++;
} while(num<=5)
console.log("Factorial of 5: ",fact);


//ACTIVITY 4
for(var i=0; i<5; i++) {
    for(var j=0; j<=i; j++) {
        process.stdout.write("* ");
    }
    console.log("");
}


//ACTIVITY 5
console.log("Print 1 to 10 but continue on 5");
for(var i=1; i<=10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}

console.log("Print 1 to 10 but break on 7");
for(var i=1; i<=10; i++) {
    if(i === 7) {
        break;
    }
    console.log(i);
}