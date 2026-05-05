const sumAll = function(num1 ,num2) {

    const smaller = Math.min(num1,num2);
    const larger = Math.max(num1,num2);
   
    if(!Number.isInteger(num1) || !Number.isInteger(num2) ) return 'ERROR' ;

    //if inputs are negative return error.
    if(num1 < 0  || num2 <0) return 'ERROR';

     if (num1 > num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }


     let sum = 0;
    for(let i =smaller;i<=larger;i++){
    
        //adding each number to sum 
         sum +=i;
    }

    return sum;

};
sumAll(1,4)

// Do not edit below this line
module.exports = sumAll;
