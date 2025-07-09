// TO fIND tHAT GIVEN vaRIAVLE IS NUMBER OT NOT .FINITE IS BEST  NUMBER METHOD
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(+'20'));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(20));

console.log("  ")

//MAth ANd Rounding
console.log(23 === 23.000);
console.log(1 + 2 === 3);

console.log(0.1 + 0.2 === 0.3); // for decimal 0.1 + 0.2 === 0.300001 so hence it's  false

console.log("  ")
 
// find sqrt of a number 
const a= 25 ** (1/2);
console.log(a);
console.log(Math.sqrt(25))

console.log("  ")


//finding cbrt of  a number
const b= 8 ** (1/3);
console.log(b);
console.log(Math.cbrt(27))

console.log("  ")

// Rounding integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));


/// Diff B.t floor and Truc,=> Floor gives closest int value and also have  type coehersion ppyt in it 
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));


