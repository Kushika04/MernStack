console.log(personName);

var personName = "Vini";   //it will not cause error 
//let personName = "Vini"; //if we use let then it will cause error

console.log(personName);

var x = 45;

function fun(){
    console.log(x);    //undefined
    var x = 12;
    console.log(x);    //12
}

fun();

console.log(x);   //error if var x = 45; is comment out


//Type Conversion
console.log(Number("3.14"));
console.log(Number("4"));
console.log(Number(" "));
console.log(Number(""));

// Number(99 88); //error
console.log(Number("John")); //NaN Not a Number 
let a = 123;

(123).toString();
a = a.toString();

console.log(typeof(a));

//date 

d = new Date();
console.log(Number(d));
console.log(d);

console.log(d.getTime());

console.log(String(Date()));

//Boolean to string or number
console.log(Number(false));
console.log(typeof(false.toString()));


//arrays

const arr = ['Kia','Audi','Toyota','Mercedes','Jaguar','BMW'];
console.log(arr);

for(let i=0;i<arr.length;i++){
    console.log(i+1 , " : ",arr[i]);
}

console.log(arr.sort()); //sorting the array
console.log(arr[0]);
console.log(arr.at(2));
arr.pop();
console.log(arr);
console.log(arr.length);
arr.push("Honda","Maruti Sizuki");
console.log(arr);
arr.shift();    //it will remove the first ele of an array and take all other element to there previous index
console.log(arr);
arr.unshift("Audi");  //it will add the ele at the first position
console.log(arr);

const arr1 = ['Verna','Creta','Fronx','Polo','Eartiga','Fortuner','Scorpio'];

const merge_Array = arr.concat(arr1);
console.log(merge_Array);
merge_Array.splice(0,3);
console.log(merge_Array);


//Nesting

const arr2 = [1,2, "text1", [3,4], {id : 11}];

console.log(arr2);
console.log(arr2[4]);

const obj = {
    firstName : "Krishna",
    lastName : "Rajput",
    age : 16,
    friends : ['vaibhav','dhir','sanchit'],
    marks : {
        hindi : 78,
        punjabi : 88,
        english : 79,
        maths : 89,
        science : 70
    }
};

console.log(obj.marks.english);

//Random function
console.log(Math.floor(Math.random()*101));

//program to print subarray and subsequence 

//function nesting

function f1(){
    console.log("Hello from f1");

    f2();
    function f2(){
        console.log("Hello from f2");
    }

}
f1();
// f2(); //error: f2 is not defined


function f3(){
    console.log("1");
    f4();
    console.log("3");
}
function f4(){
    console.log("2");
}
f3();

//callback function

function t1(callback){
    console.log("4");
    callback();
    console.log("6");
}
function t2(){
    console.log("5");
}

t1(t2);





const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let min = 0;
let max = 100;
let target = Math.floor(Math.random() * 101);

let i = 1;

function getRI(min, max, callback) {
  rl.question(`Enter a number between ${min} and ${max}: `, function(input) {
    let num = Number(input);
    if (isNaN(num) || num < min || num > max) {
      console.log("Invalid input. Try again.");
      getRI(min, max, callback); // Ask again
    } else {
      callback(num); // Return number
    }
  });
}

function play() {
  if (i > 7) {
    console.log("❌ Out of tries. You lost!");
    console.log(`The correct number was: ${target}`);
    rl.close();
    return;
  }

  getRI(min, max, function(num) {
    if (num > target) {
      console.log("Too high!");
      max = num;
    } else if (num < target) {
      console.log("Too low!");
      min = num;
    } else {
      console.log("🎉 YOU WON !!");
      rl.close();
      return;
    }

    i++;
    play(); // next try
  });
}

play(); // start the game
