// VVIMP CONCEPT?METHOD OF ARRAY
// FLAT() ==> It's used to Flat the Nested array into a single array

// 1st level Flat
const arr= [1,[2,3,4],5,6,7];
const b=arr.flat(); // it;s same as arr.flat(1) and it flat 1st level nested array
console.log(b);

console.log(" ");
//2nd LEvel Flat
const crr= [1,[2,[3,4],5],6,7];
const d=crr.flat(2);   // it flat's the 2nd level nested array
console.log(d);

console.log(" ");
//3rd level Flat
const err=[1,[2,[3,4,5],6],7];
const f=err.flat(3);   // it flat's the 3dd level nested array
console.log(f);








//// FLATMAP() ==>> USING FLAPT AND MAP ARRAY METHOD TOGETHER IS THE CONCEPT OF FLATMAP() METHOD

