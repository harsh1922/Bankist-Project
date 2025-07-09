////iNTEGERS SORTING


//Asc order sorting
const arr=[1,2,3,4,-50,-69,78];
const ans =arr.sort((a,b)=>{
    if(a>b) return 1; //1=> means swapping 
    if(a<b) return -1;
});
console.log(ans);

//Dec order sorting
const brr=[1,2,3,4,-50,-69,78];
const bns =brr.sort((a,b)=>{
    if(a>b) return -1;
    if(a<b) return 1;
});
console.log(bns);
