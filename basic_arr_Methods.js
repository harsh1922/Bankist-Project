/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/
               //COMMMON/ BEST USED METHOD S INN ARRAYA =>

                    
//    1] arr .slice() => It's works same as string , and it does'nt mutate/Change Array ie Original array remains same
const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(arr.slice(1,-2));
console.log(" ");
console.log(arr);

//const[a,b,c,d,e,f, ...oth] = arr;   /// splice is somewhat same as rest(...) operator
//console.log(oth);

//    2] arr .splice(i) => It's delete the ith elemnt forn arr and  store in a new array , and it does mutate/Change Array ie Original array  not remains same
const v= arr.splice(-2);
console.log(v);   //  v=[70,1300]
console.log(arr);    // now arrr will loose it last element and arr=[200, 450, -400, 3000, -650, -130]

//const[a,b,c,d,e,f, ...oth] = arr;   /// splice is somewhat same as rest(...) operator
//console.log(oth);     // sameoutput as v




//   3] arr.reverse()  and arr.concat() => It reverse arr and  concat mix two array together , and it both does mutate/Change Array ie Original array  not remains same 
const t=[1,2,3,4,5]
console.log(t);
console.log(t.reverse());
console.log(t);  // After reverse our original array t will get change/mutate as well 

const ans=[1,2,3,4,5,]
const fans= ans.concat(t);
console.log(fans);


//4] arr.at(i) => It;s ame as arr[i] but only diff and its advantage is that if we don't know array size we still can get last element of array using arr.at[-1];

const ty=[1,2,3,4,5,6,7,8,9,1999];
console.log(ty.at(-1));

