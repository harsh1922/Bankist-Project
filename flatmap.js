/// FIND OVERALL MOVENEMTS SUM ie ADD ALL MOVENEMTS ARRAy IN ONR INTEGER

const account1 = {
    owner: 'Harsh Sharma',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Ajay Sharma',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Mamta Sharma',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sakshi Sharma',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];


  /*

  // Method 1= Using .map(), .flat(), .reduce() one by one

  const allMov=accounts.map(mov => mov.movements).flat().reduce((mov,acc)=>
      acc+mov ,0
  )
  console.log(allMov)

  */

  //.flatMAp() ==> It's a mixture of .map() and .flat() ,its first map the array and then sudeendly flat it in one operation 

  //  // Method 2= Using  .flatMAp() and .reduce() 
  
  const overAll=accounts.flatMap(mov => mov.movements).reduce((mov,acc)=>
      acc+mov ,0
      )
      console.log(overAll)
  
  
  
  
    