// For-Each Looping works on  a principle that for all elements in array/set/map/object it uses a callback function as parameter and for each element function will get called where we implement allour logic

//1] For-Each Looping In Arrays [Basics]

// Q1] Gven arr=[10,-20,30,-40];   ///Print +ive element as` You deposited elemnt/value   and for +ive element print ` You withdrew elemnt/value in positve` 

       //sol =>>
const arr=[10,-20,30,-40];
arr.forEach(function(a){  // here funtion(a) is a callback function which will gets called for all element of array and inside it we implement our main logic
    if(a>0) console.log(`You Deposited: ${a}`);
    else console.log(`You Withdrew: ${Math.abs(a)}`);
});

console.log(" ");



//  Concept 1] ->> DESTRUCT ARRAY INTO IDX ,ELE USING FOR-EACH LOOPING =>>
const brr=[10,-20,30,-40];
brr.forEach(function(b,idx,arr){   
    if(b>0) console.log(`${idx+1}:You Deposited ${b} 🤑🤑🤑🤑`);
    else console.log(`${idx+1}:You Withdrew ${Math.abs(b)} 🥳🥳🥳🥳`);
});


// SAme code using Arrow fuNCTION(Advance method)
const crr = [10, -20, 30, -40];  
brr.forEach((b, idx) => {
   const type = b > 0 ? 'Deposit' : 'Withdraw';  
   console.log(`${idx + 1}: You ${type} ${Math.abs(b)} ${type === 'Deposit' ? '🤑' : ''}`)
}
   ); 




//  Concept 2] ->> DESTRUCT MAPS AND SETS INTO IDX ,ELE USING FOR-EACH LOOPING =>>

// For EAch Looping In MAP

const m= new Map([
    ['name','Harsh'],
     ['id',351],
     ['age',21],
     ]);
     m.forEach(function(val,key,map){
         console.log(`${key}:${val}`);
     })
     console.log(" ")
     
     
     //For EAch Looping In SETS

     const ar=[10,21,'harsh',49];
     const s= new Set(ar);
  s.forEach(function(val,v,set){
         console.log(`${v}:${val}`);
     })
     