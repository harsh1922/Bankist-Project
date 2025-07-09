// Praticing Reduce  Method Advance use Cases
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
  
  
  //Q1] Find Sum of all Movements ?
  
  //Method 1=> Long Way
  
  const ans=accounts.map(mov=> mov.movements);
  console.log(ans);
  const bns= ans.flat()
  console.log(bns);
  const fans=bns.reduce((acc,mov)=> acc+mov , 0);
  console.log(fans);
  
  
       // Method 2=> Advance Way
       
  const ans=accounts.flatMap(mov=> mov.movements).reduce((acc,mov)=> acc+mov, 0);
  console.log(ans);
  */
  
  
  VVVIMPP
  
  
  //Q2] Find Number of deposit Greater than 1000$ ?
  
  //Method 1=> Easy Way (USinf flatMap and Filter)
  
  const deposit= accounts.flatMap(mov=>mov.movements).filter(mov=> mov >= 1000).length;
  console.log(deposit);
  
  
    METHOD 2 => Advance WAy (Using flatMAp and Reuce Method)
    
    const deposit= accounts.flatMap(mov=> mov.movements).reduce((count, mov)=> 
      (mov >= 1000 ? count +1 : count) , 0
    );
  console.log(deposit);
  
  
  
  ///*****VVVVVVVVVVVVVIMPPPPPPPPPp
  //Q3] Store Deposit sum ANd Withdrea sum in annew Object
  
  const ans= accounts.flatMap(mov=> mov.movements).reduce((sum , mov)=>{ 
       mov > 0 ? sum.deposit+= mov : sum.withdrawl+= mov 
       return sum;
       },{deposit: 0, withdrawl: 0});
       console.log(ans);
  
  const b=accounts.flatMap(mov=>mov.movements).reduce((sums,cur)=>{  //sums is acc here 
        cur > 0 ? sums.deposit +=cur : sums.withdrawl +=cur
        return sums;
    }, {deposit:0, withdrawl: 0});
    console.log(b);
  
  
  
  