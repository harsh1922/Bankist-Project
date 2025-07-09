/*
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/
 
                                     //METHOD 1 => USNG METHOD ONE BY ONE
const age=function(d){
    //sol 1
        const fans=d.map(mov => 
        mov <= 2 ? mov*2 : 16 + mov*4
        );
        
        //sol 2 
        const sans=fans.filter(mov =>
        mov > 17
        );
        
        // sol 3
        const tans=sans.reduce((acc,mov)=>
        acc+mov, 0
        );
        const ans=tans/sans.length;
        return ans;
    };
    
    const test1=[5, 2, 4, 1, 15, 8, 3];
        console.log(age(test1));

        const test2=[16, 6, 10, 5, 6, 1, 4];
        console.log(age(test2));


        console.log(" ");
        console.log(" ");
        console.log(" ");

 



        ///BAAP CONCEPT SOLVE ABOVE QUESTION USINF CHAINING METHOD  ----- CODING CHALLEGE 3

        const a= ages => ages.map(mov=>  mov <= 2 ? mov*2 : 16 + mov*4)
        .filter(mov=>   mov > 17)
        .reduce((acc,mov,i,arr)=>
        acc + mov/arr.length , 0);
        const t1=[5, 2, 4, 1, 15, 8, 3];
         console.log(a(t1));
         const t2=[16, 6, 10, 5, 6, 1, 4];
         console.log(a(t2));