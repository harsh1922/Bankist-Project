//Q1] BAsic Question =>  Given a string return first weeter of each world for eg `Harsh Sharma` so output should be  'hs'
const user= `Harsh Sharma`;// O/p hs
const a=user.toLowerCase().split(" ").map(function(mov){
    return mov[0];
}).join("");
console.log(a);



///Q2] Advancd Question =? GIven a array of string Return each string each world fierst letter only ( in lower case) 

// FOr eg name =['Harsh Sharma', 'Pagal Aashiiq', 'Innocent Fucker']; 
//O/P => [hs,pa,if];

const displayUser=function(name, final){  /// name is an array with multiple user names 
    name.forEach(function(mov){
        const a=mov.toLowerCase().split(" ").map(function(m){
    return m[0];
}).join("");
final.push(a);
    });
};
const name =['Harsh Sharma', 'Pagal Aashiiq', 'Innocent Fucker'];
const final =[];
displayUser(name,final);
console.log(final);
