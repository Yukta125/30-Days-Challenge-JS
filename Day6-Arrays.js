//ACTIVITY 1
var arr = [1,2,3,4,5];
console.log(arr);

console.log(arr[0]);
console.log(arr[arr.length-1]);


//ACTIVITY 2
arr.push(6);
console.log(arr);

arr.pop()
console.log(arr);

arr.shift()
console.log(arr);

arr.unshift(7)
console.log(arr);


//ACTIVITY 3
var mapArr = arr.map((arr) => arr*2);
console.log(mapArr);

var filterArr = arr.filter((arr) => {if(arr%2 === 0) {return arr;}});
console.log(filterArr);

var reduceArr = arr.reduce((sum, arr) => {return sum+=arr});
console.log(reduceArr);


//ACTIVITY 4
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(element => {
    console.log(element);
});


//ACTIVITY 5
arr = [[0,1,2],[3,4,5],[6,7,8]];
for(var i=0; i<3; i++) {
    for(var j=0; j<3; j++) {
        console.log(arr[i][j]);
    }
}

console.log(arr[0][1]);