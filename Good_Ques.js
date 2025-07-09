/// DELETE KTH INDEX IN ARRAY

/*
const a = [10, 87, 79, 57, 85];  
const k = 2;  
const b = a.findIndex(function(mov, i) {  
    if(i === k) return true;  
});  
console.log(b);  
a.splice(b, 1);  
console.log(a);
*/

const a = [10, 87, 79, 57, 85];  
const k = 2;  
const b = a.findIndex((mov, i) =>{  
    if(i === k-1) return true;  
});  
console.log(b);  
a.splice(b, 1);  
console.log(a);