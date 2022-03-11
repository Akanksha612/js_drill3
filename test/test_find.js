const obj= require('../find.js');

const items = [1, 2, 3, 4, 5, 5];


function cb(element)
{
    if(element>2)
    return true;
}


console.log(obj.find(items,cb));



