let a= [1,2,3,4,5];
let evencount=0;
let oddcount=0;
for(i=0; i<a.length;i++)
  if(a[i]%2==0){
    evencount++;
  }
else{
  oddcount++;
}
console.log("even:",evencount++,"odd:", oddcount++);