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
  
  //Q1] Find sum of all Movemnets in each account
  const all=accounts.flatMap(mov=>mov.movements)  // Storing all movemnets  in one array
  console.log(all);
  const ans=all.reduce((acc,mov)=> acc+mov, 0);
  console.log(ans);
  
  //Q2] Find Deposit and withdrawl sum of eaach movements //.REDUCE METHOD ADVANVCE USAGE 
  const b=accounts.flatMap(mov=>mov.movements).reduce((sums,cur)=>{  //sums is acc here 
      cur > 0 ? sums.deposit +=cur : sums.withdrawl +=cur
      return sums;
  }, {deposit:0, withdrawl: 0});
  console.log(b);
  
  
  //Q3/FInd LEngth of all movement > 0
  
  //Method 1=> USINF FILTER(BASIC APPROACH)
  //const c=accounts.flatMap(mov=>mov.movements).filter(mov=>mov>0).length;
  //console.log(c);
  
  /*//Method 1=> USING REDUCE(ADVANCE APPROACH) 
  const c=accounts.flatMap(mov=>mov.movements).reduce((count,cur)=>{
      cur > 0 ? count +1 : count
      return count;
  },0);
  console.log(c);
  */ 
  
                               //OR
  const c = accounts.flatMap(mov => mov.movements).reduce((count, cur) => {  
      if(cur > 0)  ++count ;
      else count;
      return count;
  }, 0);  
  
  console.log(c);
  
  
  
  
  
  
  
  
  
  