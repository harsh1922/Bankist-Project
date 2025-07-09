// Seperate callback Concept --> An advanced apprach to use method which makes your code looks professional

const deposit= mov=> mov > 0;
const a=[1,2,-4,-5,7,8];
const b=a.some(deposit);
const c=a.filter(deposit);

console.log(b);
console.log(c);