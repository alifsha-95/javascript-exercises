const removeFromArray = function (array, ...itemsRemove) {
    //  const filterd  = array.filter(item=>  !itemsRemove.includes(item));
    // return filterd;

    //create a new empty array
    const newArray = [];

    // use forEach = (is a inbuilt function) to go through an array
        array.forEach((item )=>{

            //push every element into newArray UNLESS
            // it is inlcuded inthe function arguments
            //so we create a new array with every item,
            //  except those that should be removed
            if(!itemsRemove.includes(item)){
                newArray.push(item);
            }
        } 
    ) 
        return newArray
    };

removeFromArray([1,2,3,4,5],3);


// Do not edit below this line
module.exports = removeFromArray;
