
console.log("Hello, World!");
let a,b;
a=10;
b=20;
console.log(a+b);

let p1 = "Hello";
console.log(p1);
let p2 = 'World';
console.log(p2);

let carname;
console.log(carname);

let x = p1 + " " + p2; //joining string 
console.log(x);

let y = 2 + 3 + "5";
console.log(y);

let $ = "Bye";
let $$ = "Mern stack";
let $balanceAmt = 30000;

console.log($);
console.log($$);
console.log($balanceAmt);

let _x = "Bye";
let _name = "Mern stack";
let _100 = 30000;

console.log(_x);
console.log(_name);
console.log(_100);

carname = 'Verna';
console.log(carname);

const car = {type:"Fiat", model:2000, color:"White"};
console.log(car);

car.color = "Red";
console.log(car);

car.owner = "John";
console.log(car);

console.log(2**4); //exponential
var c = 10;
let d = 10;
console.log(c);
console.log(c === d);
console.log(c == d);
{
    var c = 20;
    let d = 30;
    console.log(c);
    console.log(d); //let will not change the value of global variable but var change the value of global var
}
console.log(c);
console.log(d);

console.log(typeof(c));
console.log(typeof(p1));
console.log(typeof(y));

console.log(2+3+"5");
console.log("5" + 2+3);
console.log(1-'1')
console.log(typeof('1'-2));
console.log('1'-1);

let str = "  Hello:world:bye:take:care  ";
console.log(str.toLowerCase());
console.log(str.indexOf("o"));
console.log(str.replace("Hello","World"));
console.log(str);
console.log(str.split(":"));
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

for(let i=0;i<5;i++){
    console.log(i);
}

console.log(str.length);

let s = "  hello  ";
let n = s.length;
console.log("n: ",n);
let si, ei;
for(let i=0;i<n;i++){
    if(s[i] != " "){
        si = i;
        break;
    }
}
for(let i=n-1;i>=0;i--){
    if(s[i] != " "){
        ei = i;
        break;
    }
}
console.log(si);
console.log(ei);
let new_s = s.substring(si,ei+1);
console.log("After triming length of string : ", new_s.length);

//input : seconds convert it into hrs:min:sec ,eg: 04:05:01

let time = 48000;

function conversion(t){
    let hrs = Math.floor(t/3600);
    let rem = t%3600;
    let min = Math.floor(rem / 60);
    let sec = rem%60;
    
     let hh = String(hrs).padStart(2, '0');
    let mm = String(min).padStart(2, '0');
    let ss = String(sec).padStart(2, '0');

    console.log(hh,":",mm,":",ss);
}

conversion(time);

//print the length of longest word in the sentence

function longestLen(sen){
    let ans = 0;
    let c=0;
    for(let i=0;i<sen.length;i++){
        c++;
        if(sen[i] == " "){
            c=0;
        }
        if(c > ans){
            ans = c;
        }
    }
    console.log(ans);
}
longestLen("Hello World, How are you ?");
longestLen("Hi, Kushika");
longestLen("abcdefghijklmnopqrstuvwxyz a");


