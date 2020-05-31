//simple recursion program
const countdownToZero = (n) => {
if(n < 0){
return;
}
else{
console.log(n);
countdownToZero(n - 1);
}
}

//invoking function - Counting down from 100
countdownToZero(100);
