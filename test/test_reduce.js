const obj=require('../reduce.js');


const items = [1, 2, 3, 4, 5, 5];


function cb(startingValue,element)
{
   return startingValue+element;
}

console.log(obj.reduce(items,cb,1));