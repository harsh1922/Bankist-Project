'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


  
            // Step 1->>
const display =function(movements){
  //containerMovements.innerHTML='';  // It's very imp step cuz iyts remove intial vaue in Movements bar so that we can ush neew movements i it
  containerMovements.innerHTML='';

movements.forEach(function(mov,i) {

const type = mov > 0 ? 'deposit' : 'withdrawal';

const html =`<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}₹</div>
        </div>`;
        containerMovements.insertAdjacentHTML('afterbegin',html);
})
};
//display(account1.movements);


//Step 2 - creating Username ppt for Each accout object store in account array[]

const createUsernames = function(user){ // passin g array which have objectas elemst
  user.forEach(function (u){
    u.username=u.owner  // adding username property to to each object ie array element 
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });
};
createUsernames(accounts);
//console.log(accounts);  // see in live console that in each account ie 1,2,3,4  username property  is been added/ updated 


//Step3 => Finding and Stroing Currrent Balance

const calCurBalance =function(acc){
  const b= acc.movements.reduce((acc,mov)=> acc + mov, 0);
  acc.balance =b  // 0 is the aue we want acc to be intailly initilaize with
  labelBalance.textContent=`${b}₹`;
}
//calCurBalance (account1.movements);


///Step 4 =>> Finding and Storing Income/Deposit ,  Outcome/Withdrawl , And Interest 

const displaySummary= function(acc){

  //FInd in Total DEposits ie +ive value
const income=acc.movements.filter(mov => mov > 0)
.reduce((acc,mov)=>
  acc+ mov ,0
);
labelSumIn.textContent=`${income}₹`;



 //FInd in Total Withdrawls ie -ive value
const outcome=acc.movements.filter(mov => mov < 0)
.reduce((acc,mov)=>
  acc+ mov ,0
);
labelSumOut.textContent=`${Math.abs(outcome)}₹`;




//FInd Intrests
const interest=acc.movements.filter(mov => mov > 0 )
.map(mov => (mov * 1.2) / 100)
.filter(mov => mov >= 0)
.reduce((acc ,mov)=> 
acc + mov ,0
);
labelSumInterest.textContent=`${Math.abs(interest)}₹`;

}


const updateUI= function(acc){
  
  //Display Movemet for current user here
  display(acc.movements); 
  
  //Display current Balace for current user here
  calCurBalance(acc);
  
  
  //Display user Summary  for current user here
  displaySummary(acc);
  }

  //updateUI(accounts);
  


  ///IMPLEMENTING LOGOUT TIMER COUNTDOEN CODE  SO THAT IF USER IS NOT USIG APP FOR 5MIN <THEN APP WILLL AUTOMATICALLY LOG USER OUT

  const startLogOutTimer = function () {  
    // Set time to 5 minutes (300 seconds)  
    let time = 300; // 300 seconds  
  
    const timer = setInterval(function () {  
      // Calculate minutes and seconds  
      const min = String(Math.floor(time / 60)).padStart(2, '0');  
      const sec = String(time % 60).padStart(2, '0');  
  
      // Update UI timer  
      labelTimer.textContent = `${min}:${sec}`;  
  
      // Decrease time by one second  
      time--;  
  
      // When time reaches 0, log out the user and stop the timer  
      if (time < 0) {  
        clearInterval(timer); // Clear the interval  
        containerApp.style.opacity = 0; // Hide UI or log out user  
        // Optionally, you can add a log out function here  
        // logOutUser(); // Call a function to handle user logout  
      }  
    }, 1000); // Timer interval set to 1 second  
  };  

//// STEP 5=> CREATING USER LOGIN CODE/Btuuuon logic using Event Handler
let currentUser;

btnLogin.addEventListener('click',function(e){
  e.preventDefault();  ///PRevent  form from sUbmitting
  console.log('LOGIN');// just for testing purpose

 currentUser=accounts.find(mov=> mov.username === inputLoginUsername.value);   /// cuz aove we made a usermane prperty wgich converts Name in short form ie Harsh Sharma == hs , so here we'll find fow which account username = user input
console.log(currentUser);

if(currentUser.pin === Number(inputLoginPin.value)){
  console.log('Login'); // just for testing purpose
  labelWelcome.textContent=`Welcome back, ${currentUser.owner.split(' ')[0]}`;
  containerApp.style.opacity =100; /// by fixing pacity to 100 we can see the user bank data /// Uopdating opacity property in app class in css to 100 cuz we want see UI when a USer Login so here we updae opacity to 100 which was initially 0 uz at login page we dont want to show user the UI after succcessful login we willl show user the real UI
}

else {
  alert('Invalid User!');
}

// Now updating UI with above changes
startLogOutTimer();
updateUI(currentUser);

// cearing the Input fields ie Login and Pin HTML LABEL SO that A New can;t see see it and also log in his account 
inputLoginUsername.value=inputLoginPin.value ='';
inputLoginPin.blur();  // so that cursor does'nt visible on pin label if a user in currentlt logged in

});


// STEP 6 +> ADDING TRANSFER MONEY FEATURE
btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();  ///PRevent  form from sUbmitting
  const amount =Number(inputTransferAmount.value);
  const recieverAcc=accounts.find(acc=> acc.username === inputTransferTo.value);

console.log(amount, recieverAcc);

 if(amount > 0 && currentUser.balance >= amount && recieverAcc && recieverAcc?.username !== currentUser.username)
   {
console.log("Valid Transfer");
currentUser.movements.push(-amount);
recieverAcc.movements.push(amount);
 }
 else {
  alert('Invalid Transfer!');
 }
 inputTransferTo.value = inputTransferAmount.value ='';

// Now updating UI with above changes
updateUI(currentUser);
})



/// Step 7 => IMPLEMENTING LOAN FEATURE TO OUR APP USING SOME METHOD/some(mov=>)

  /// Give loan to any deposit greater than 10% of request ie here we'll use .some()

  btnLoan.addEventListener('click', function(e) {
    // Prevent default form submission behavior
    e.preventDefault();
    
    // Parse the loan amount after clearing the field
    const loan = Number(inputLoanAmount.value);

    // Clear the input field
    inputLoanAmount.value = '';
  
    // Check conditions for granting the loan
    if (loan > 0 && currentUser.movements.some(mov => mov >= loan * 0.1)) {
      // Add movements (assuming this is where you add the loan to currentUser's movements)
      currentUser.movements.push(loan);
  
      // Update UI after adding the loan
      updateUI(currentUser);
    } else {
      // Alert if conditions are not met
      alert(`Loan can't be granted 🤧🤧`);
    }
  });
  


  //// STEP 8 => CLOSING ACCOUNT LOGIC

  btnClose.addEventListener('click', function(e){
    e.preventDefault();  ///PRevent  form from sUbmitting
    console.log(currentUser)

    if(inputCloseUsername.value === currentUser.username && Number(inputClosePin.value) === currentUser.pin){
       
      const index=accounts.findIndex(acc=> acc.username === currentUser.username)

    console.log(index);  // just for testing purpose

      accounts.splice(index,1);  

      containerApp.style.opacity =0; // Hidong that account

    }
    else {
      alert('Invalid Credentials for closing Account!')
    }
    
    inputCloseUsername.value = inputClosePin.value ='';// Clearing thr form.label

    // Here we don't need to update our Ui cuz spice method do mutate array so it automatically delete that object/account which is currentUser now and it will be automatically deleted in accounts array cuz we are using splice() So don;t no Update UI
  })




///Step (last step) => Sorting thr Movements in Desecnding Order
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  console.log("sort");
const movs=current.user.movements.slice().sort((a,b)=> {
  if(a>b) return -1;
  if(a<b) return 1;
})
display(movs);
})


