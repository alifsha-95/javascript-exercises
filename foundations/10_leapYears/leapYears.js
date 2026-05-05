const leapYears = function (leapYear) {

    const yearDivisibleByFour = leapYear % 4 === 0;
    const century = leapYear % 100 === 0 ;
    const divisibleByFourHundrend = leapYear % 400 === 0;

    if(yearDivisibleByFour &&
         (!century || divisibleByFourHundrend)){
            return true;
         }else 
            return false;
  

};
leapYears(2000);

// Do not edit below this line
module.exports = leapYears;
