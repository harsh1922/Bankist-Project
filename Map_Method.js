/* The MAp method ->> It return a new array by updating initial array
One of the most used/famous method ofArray   */


///1] Using Normal function
const a=[1,2,3,4,5,6,7];

const b= a.map(function(m){
    return m*10;
});
console.log(a);
console.log(b);

console.log( );


//2] Adv way ie using Arrow function
/// Same CODE BUT HERe WE ARE USINF ARROW FUnction
const c=[1,2,3,4,5,6,7];
const d= a.map(m => m*10);  /// Arrow fnction deost need return keyword  to write
console.log(c);
console.log(d);


// Q2] Convert this Euro value to INR\
const de= [200, 450, -400, 3000, -650, -130, 70, 1300];
const inr=92.67   // 1 Euro equals 92.67 Indian Rupee
const ans=de.map(mov => mov*inr);
console.log(ans);



/* Q3]  Given arr/b = [200, , -400, 3000, -650];
create a new array as ouput which looks like 

[
  'Movement 1: You Deposit 200',
  'Movement 2: You Withdraw 400',
  'Movement 3: You Deposit 3000',
  'Movement 4: You Withdraw 650'
]
  */


          //M1- Using map with Normal function 
const giv =  [200, -400, 3000, -650,]; 
 
const movementDescription = giv.map(function(mov,i,arr)  {   
return `Movement ${i + 1}: You ${mov > 0 ? 'Deposit' : 'Withdraw'} ${Math.abs(mov)}`
});  
console.log(movementDescription);



//M2-> Using Map with Arrow Function (Adv Method)

const aro = [200, -400, 3000, -650,];  
const movementDescript = aro.map( (mov,i,arr) =>  
  `Movement ${i + 1}: You ${mov > 0 ? 'Deposit' : 'Withdraw'} ${Math.abs(mov)}`  
);  
console.log(movementDescript);

//OR it can also be done as
const yro = [200, -400, 3000, -650,];  
const movementDescri = yro.map( (mov,i,arr) => { 
  return `Movement ${i + 1}: You ${mov > 0 ? 'Deposit' : 'Withdraw'} ${Math.abs(mov)}`  
}
);  
console.log(movementDescri);






