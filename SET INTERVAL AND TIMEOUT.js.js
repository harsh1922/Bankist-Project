
//SETTIMEOUT
const name=['harsh', 'sharma'];
const time=setTimeout((first, last)=>
console.log(`My name is ${first},${last}`),
1000,
...name,
);
console.log(`Waiting...`);

console.log(" ");

//SET INTERVAl basic USAGE 
let b=5;
const interval=setInterval(function () {
  const now = new Date();  // new date gives us the cutrrent date
 console.log(now);
 b--;
 if(b===0){
     clearInterval(interval);
 }
}, 1000);

console.log(" ");

///SET INTERVAL CONCEpt [Advcance Approach/Usage ]
const dateTimer=function(){
let c=5;
const inter=setInterval(function () {
  const now = new Date();
 console.log(now);
 b--;
 if(b===0){
     clearInterval(inter);
 }
}, 1000);
};

dateTimer();
