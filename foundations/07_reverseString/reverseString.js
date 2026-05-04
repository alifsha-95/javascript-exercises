const reverseString = function (string) {

    const array = string.split('');
    const reversed = array.reverse('');
    const result = reversed.join('');

    return result;
    

};


// Do not edit below this line
module.exports = reverseString;
