/////MORE wAys to create ANd Filter Arrays

//Concept 1 => Creating Array maulaay usiogn new Array('length')
const a=new Array(7);


///Concept 2 +> Filling aray with .fill() method
// create array[1,1,1,4,4] from fill()
let arr;
arr=new Array(5);
console.log(arr);

arr.fill(1,0,3)
console.log(arr);
console.log(" ");
arr.fill(4,3,5)
console.log(arr);

console.log(" ");

//  Baap Concept 3] Creating ANd Filling array in one step using Array.from({'length}, () => 'val')
//concpt a]
const y=Array.from({length:7}, ()=>1);
console.log(y);

console.log(" ");

//Concept b] // BApp Create [1,2,3,4,5,6,7] maunally in one step
const z=Array.from({length:7}, (_,i) => i+1);     /// _ here is used cuz we only want to use seconf paprametre ie i and to use it we want 2 paramater minimun in an function so we create a seconf parametre _ by which we can use i parametetr
console.log(z); 

console.log(" ");